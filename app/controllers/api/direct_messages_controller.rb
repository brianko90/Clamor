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
    @direct_message.user_id = current_user.id
    @direct_message.conversation_id = params[:conversation_id] 
    @conversation = Channel.find_by(id: params[:conversation_id])
    if @direct_message.save 
      render :show 
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
