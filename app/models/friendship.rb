# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  status     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer
#  user_id    :integer
#
class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :status, presence: { in: [1, 2, 3]}

  belongs_to :user,
  foreign_key: :user_id,
  class_name: "User"

  belongs_to :friend,
  foreign_key: :friend_id,
  class_name: "User"
end
