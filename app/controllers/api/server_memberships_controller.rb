class Api::ServerMembershipsController < ApplicationController
  def create
    @membership = ServerMembership.new(server_membership_params)
    if @membership.save 
      render :show
    end 
  end  

  def destroy 
    puts params
    @membership = ServerMembership.find_by(id: params[:id])
    @membership.destroy
    # @server = Server.find_by(id: server_membership_params[:server_id])
    @user = User.find_by(id: current_user.id)
    render 'api/users/show'
  end

  private

  def server_membership_params 
    params.require(:server_membership).permit(:user_id, :server_id, :id)
  end
end
