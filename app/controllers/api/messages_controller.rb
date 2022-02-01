class Api::MessagesController < ApplicationController
  def index 
    @messages = Message.all 
    render 'api/channels/show'
  end 

  def show
    @message = Message.find_by(id: params[:id])
    render :show
  end 

  def create 
    @message = Message.new(message_params)
    @channel = Channel.find_by(id: params[:channel_id])
    @message.sender_id = current_user.id 
    @message.channel_id = params[:channel_id]
    if @message.save
      ChannelsChannel.broadcast_to(@channel, {
        message: {
          id: @message.id,
          senderId: @message.sender_id,
          channelId: @message.channel_id,
          username: @message.sender.username,
          body: @message.body,
          createdAt: @message.created_at,
          pfp: url_for(@message.sender.pfp)
        }
      })
    else  
      render json: @message.errors.full_messages, status: 422
    end 
  end 

  def update 
    @message = Message.find_by(id: params[:id])

    if @message.update(message_params)
      render :show
    else  
      render json: @message.errors, status: 422
    end
  end 

  def destroy 
    @message = Message.find_by(id: params[:id])
    @message.destroy
  end 

  private 

  def message_params
    params.require(:message).permit(:body)
  end 
end
