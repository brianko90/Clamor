class Api::FriendsController < ApplicationController
  def index 
    @user = User.find_by(id: current_user.id)
    render :index
  end
  
  def create 
    @friendship = Friendship.new(user_id: current_user.id, friend_id: friendship_params[:friend_id], status: 1);
    other_friendship = Friendship.new(user_id: friendship_params[:friend_id], friend_id: current_user.id, status: 2);
    
    #Need to refactor this to handle friends
    if @friendship.save
      render :show
    end
  end 

  def update
    @friendship = Friendship.find_by(id: params[:id])
    
  end

  def destroy
    #this params[:id] may not suffice depending on how the url wildcard is setup. May not even show up 
    @friendship = Friendship.find_by(id: params[:id])
    @friendship.destroy
    render '/api/users/show';
  end

  private 

  def friendship_params 
    params.require(:friend).permit(:user_id, :friend_id)
  end
end
