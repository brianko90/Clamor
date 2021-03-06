class Api::ServersController < ApplicationController
  def index
    @servers = Server.all 
    render :index
  end
  
  def show
    @server = Server.find_by(id: params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @user = @server.owner
    if @server.save
      selfMember = ServerMembership.new(user_id: current_user.id, server_id: @server.id)
      selfMember.save
      channel = Channel.new(name: "general", server_id: @server.id)
      channel.save
      render :show
    else 
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find_by(id: params[:id])
    if @server.update(server_params)
      render :show
    else  
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find_by(id: params[:id])
    @server.destroy
    @user = User.find_by(id: current_user.id)
    render :show
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id, :public)
  end
end
