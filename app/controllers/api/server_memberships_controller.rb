class Api::ServerMembershipsController < ApplicationController
  def create
    @user = User.find_by(id: current_user.id)
    @membership = ServerMembership.new(server_membership_params)
    if @membership.save 
      render 'api/users/show'
    end 
  end  

  def destroy 
    @membership = ServerMembership.find_by(id: params[:id])
    @membership.destroy
    @user = User.find_by(id: current_user.id)
    render 'api/users/show'
  end

  private

  def server_membership_params 
    params.require(:server_membership).permit(:user_id, :server_id, :id)
  end
end
