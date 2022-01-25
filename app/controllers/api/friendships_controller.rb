class Api::FriendsController < ApplicationController
  def create 
    @friend = Friendship.new(friend_params)
    
    #Need to refactor this to handle friends
    if @server.save
      render :show
    else 
      render json: @server.errors.full_messages, status: 422
    end

  end 

  def destroy 
    @friend = Friendship.find_by(id: params[:id])
    @friend.destroy 
  end

  private 

  def friend_params 
    params.require(:friend).permit(:user1_id, :user2_id)
  end
end
