class Api::ServersController < ApplicationController
  def index
    @servers = Server.all 
    render :index
  end
  
  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    
    if @server.save
      login!(@server)
      render :show
    else 
      render json: @server.errors.full_messages, status: 422
    end

  end

  def update 
    @server = Server.find_by(id: params[:id])
    if @server.update
      render :show
    else  
      render json: @server.errors.full_messages, status: 422
    end
  end

  def delete
    @server = Server.find_by(id: params[:id])
    @server.destroy 
  end

  private

  def server_params
    params.require(:server).permit(:name, :owner_id, :public)
  end
end
