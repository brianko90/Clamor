# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#
class Conversation < ApplicationRecord
  validates :owner_id, presence: true

  has_many :conversation_memberships,
    foreign_key: :conversation_id,
    class_name: "ConversationMembership",
    dependent: :destroy

  has_many :dms,
    foreign_key: :conversation_id,
    class_name: "DirectMessage"

  has_many :members,
    through: :conversation_memberships,
    source: :user,
    dependent: :destroy
end
