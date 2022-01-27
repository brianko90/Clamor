# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord

  has_one_attached :pfp

  has_many :server_memberships,
    foreign_key: :user_id,
    class_name: "ServerMembership",
    dependent: :destroy
  
  has_many :servers,
    through: :server_memberships,
    source: :server,
    dependent: :destroy

  has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: "Server",
    dependent: :destroy

  has_many :friendships

  has_many :friends,
    -> { where friendships: { status: 3} },
    through: :friendships,
    source: :friend,
    dependent: :destroy

  has_many :incoming_requests,
    -> { where friendships: { status: 2} },
    through: :friendships,
    source: :friend,
    dependent: :destroy

  has_many :outgoing_requests,
    -> { where friendships: { status: 1}  },
    through: :friendships,
    source: :friend,
    dependent: :destroy


  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 4}, allow_nil: true

  after_initialize :ensure_session_token, :ensure_pfp
  # after_save :ensure_pfp
  attr_reader :password

  def ensure_pfp
    if !self.pfp.attached?
      file = File.open('app/assets/images/discordblueicon.png')
      self.pfp.attach(io: file, filename: 'discordblueicon.png')
    end
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user  
    else  
      nil  
    end
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token! 
    self.session_token = SecureRandom::urlsafe_base64 
    self.save! 
    self.session_token 
  end

  def ensure_session_token 
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
