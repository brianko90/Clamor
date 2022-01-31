# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer          not null
#  sender_id  :integer          not null
#
class Message < ApplicationRecord
  validates :body, :sender_id, :channel_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: "Channel"

  belongs_to :sender,
    foreign_key: :sender_id,
    class_name: "User"
end
