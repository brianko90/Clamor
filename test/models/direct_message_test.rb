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
require 'test_helper'

class DirectMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
