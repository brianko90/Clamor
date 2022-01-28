class Api::ServerMembershipsController < ApplicationController
  def create
    @membership = ServerMembership.new(server_membership_params)
    if @membership.save 
      render :show
    end 
  end  

  def destroy 
    @membership = ServerMembership.find_by(server_membership_params)
    @membership.destroy
  end

  private

  def server_membership_params 
    params.require(:server_membership).permit(:user_id, :server_id)
  end
end
