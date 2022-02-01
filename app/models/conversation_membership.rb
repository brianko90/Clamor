# == Schema Information
#
# Table name: conversation_memberships
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  conversation_id :integer          not null
#  user_id         :integer          not null
#
class ConversationMembership < ApplicationRecord
  validates :conversation_id, :user_id, presence: true
  
  belongs_to :user, 
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :conversation,
    foreign_key: :conversation_id,
    class_name: "Conversation"
end
