class Api::ChannelsController < ApplicationController
  def show
    @channel = Channel.find_by(id: params[:id])
    render :show 
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server_id]

    if @channel.save 
      render :show
    else  
      render json: @channel.errors, status: 422
    end
  end

  def update 
    @channel = Channel.find_by(id: params[:id])

    if @channel.update(channel_params)
      render :show
    else 
      render json: @channel.errors, status: 422
    end
  end 

  def destroy  
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy
  end 

  private

  def channel_params 
    params.require(:channel).permit(:name)
  end
end
