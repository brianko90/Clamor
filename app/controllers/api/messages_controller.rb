class Api::MessagesController < ApplicationController
  def index 
    @messages = Message.all 
    render :index
  end 

  def show
    @message = Message.find_by(id: params[:id])
    render :show
  end 

  def create 
    @message = Message.new(message_params)
    @message.channel_id = params[:channel_id]
    @message.sender_id = current_user.id
    if @message.save 
      render :show
    else  
      render json: @message.errors, status: 422
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
