class Api::ConversationsController < ApplicationController
  def show
    @conversation = Conversation.find_by(id: params[:id])
    render :show
  end

  def create  
    @conversation = Conversation.new(conversation_params)
  
    if @conversation.save
      membership = ConversationMembership(conversation_id: @conversation.id, user_id: current_user.id)
      render :show 
    else  
      render json: @conversation.errors, status: 422
    end
  end

  def update  
    @conversation = Conversation.find_by(id: params[:id])

    if @conversation.update(conversation_params)
      render :show 
    else 
      render json: @conversation.errors, status: 422
    end
  end

  def destroy
    @conversation = Conversation.find_by(id: params[:id])
    @conversation.destroy
  end

  private 

  def conversation_params 
    params.require(:conversation).permit(:owner_id)
  end
end
