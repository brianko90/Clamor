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
require 'test_helper'

class ConversationMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
