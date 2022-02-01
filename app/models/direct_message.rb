# == Schema Information
#
# Table name: direct_messages
#
#  id              :bigint           not null, primary key
#  body            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  conversation_id :integer          not null
#  user_id         :integer          not null
#
# Indexes
#
#  index_direct_messages_on_user_id  (user_id)
#
class DirectMessage < ApplicationRecord
  validates :user_id, :body, :conversation_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :conversation,
    foreign_key: :conversation_id,
    class_name: "Conversation"
end
