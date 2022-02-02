class Api::ConversationMembershipsController < ApplicationController
  def create
    @convoMembership = ConversationMembership.new(conversation_membership_params)
    if @convoMembership.save
      render :show
    end
  end

  def destroy
    @convoMembership = ConversationMembership.find_by(conversation_membership_params)
    @convoMembership.destroy
  end

  private

  def conversation_membership_params
    params.require(:conversation_membership).permit(:owner_id)
  end
end
