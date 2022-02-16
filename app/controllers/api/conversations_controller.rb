class Api::ConversationsController < ApplicationController
  def show
    @conversation = Conversation.find_by(id: params[:id])
    render :show
  end

  def create 
    @conversation = Conversation.new(owner_id: current_user.id)
    @user = User.find_by(id: current_user.id)
    begin
      @conversation.transaction do 
        @conversation.save
        ConversationMembership.create(conversation_id: @conversation.id, user_id: current_user.id)
        ConversationMembership.create(conversation_id: @conversation.id, user_id: conversation_params[:owner_id])
        render 'api/users/show'
      end
    rescue 
      render json: ['User not found'], status: 422
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
    @user = User.find_by(id: current_user.id)
    @conversation = Conversation.find_by(id: params[:id])
    @conversation.destroy
    render 'api/users/show'
  end

  private 

  def conversation_params 
    params.require(:conversation).permit(:owner_id)
  end
end
