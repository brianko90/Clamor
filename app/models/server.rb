# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  public     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
# Indexes
#
#  index_servers_on_name      (name)
#  index_servers_on_owner_id  (owner_id)
#

require 'open-uri'

class Server < ApplicationRecord
  
  has_one_attached :serverpic
  
  belongs_to :owner,
  class_name: "User"

  has_many :memberships,
  class_name: "ServerMembership"

  has_many :members, 
  through: :memberships,
  source: :user

  has_many :channels,
  foreign_key: :server_id,
  class_name: "Channel"

  validates :name, :public, presence: true
  after_initialize :ensure_server_pic

  def ensure_server_pic
    if !self.serverpic.attached? 
      file = open('https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Gray.png')
      self.serverpic.attach( io: file, filename: 'Pastel-Gray.png')
    end
  end


end
