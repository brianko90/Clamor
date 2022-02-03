class Api::DirectMessagesController < ApplicationController
  def index 
    @direct_messages = DirectMessage.all 
    render :index 
  end
  
  def show 
    @direct_message = DirectMessage.find_by(id: params[:id])
    render :show
  end

  def create
    @direct_message = DirectMessage.new(dm_params)
    @conversation = Conversation.find_by(id: params[:conversation_id])
    @direct_message.user_id = current_user.id
    @direct_message.conversation_id = params[:conversation_id]
    if @direct_message.save 
      ConversationsChannel.broadcast_to(@conversation, {
        direct_message: {
          id: @direct_message.id,
          userId: @direct_message.user_id,
          conversationId: @direct_message.conversation_id,
          username: @direct_message.user.username,
          body: @direct_message.body,
          createdAt: @direct_message.created_at,
          pfp: url_for(@direct_message.user.pfp)
        }
      })
    else  
      render json: @direct_message.errors.full_messages, status: 422
    end
  end

  def update
    @direct_message = DirectMessage.find_by(id: params[:id])

    if @direct_message.update(dm_params)
      render :show 
    else  
      render json: @direct_message.errors.full_messages, status: 422
    end   
  end

  def destroy
    @direct_message = DirectMessage.find_by(id: params[:id])
    @direct_message.destroy 
  end

  private 

  def dm_params
    params.require(:direct_message).permit(:body)
  end
end
