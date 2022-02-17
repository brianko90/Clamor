class Api::FriendshipsController < ApplicationController
  def index 
    @user = User.find_by(id: current_user.id)
    render :index
  end
  
  def create 
    @user = User.find_by(id: current_user.id)
    @friendship = Friendship.new(user_id: current_user.id, friend_id: friendship_params[:friend_id], status: 1);
    other_friendship = Friendship.new(user_id: friendship_params[:friend_id], friend_id: current_user.id, status: 2);
    begin
      @friendship.transaction do
        @friendship.save
        other_friendship.save
        render 'api/users/show'
      end
    end
  end 

  def update
    @user = User.find_by(id: current_user.id)
    @friendship = Friendship.find_by(user_id: params[:user_id], friend_id: params[:id])
    friendship2 = Friendship.find_by(user_id: params[:id], friend_id: params[:user_id])
    begin
      @friendship.transaction do 
        updateHash = {user_id: @friendship.user_id, friend_id: @friendship.friend_id, status: 3}
        updateHash2 = {user_id: @friendship.friend_id, friend_id: @friendship.user_id, status: 3}
        @friendship.update(updateHash)
        friendship2.update(updateHash2)
        render 'api/users/show'
      end
    rescue 
      render json: @friendship.errors, status: 422
    end
  end

  def destroy
    @friendship = Friendship.find_by(user_id: params[:user_id], friend_id: params[:id])
    @user = User.find_by(id: current_user.id)
    @friendship.transaction do
      friendship2 = Friendship.find_by(user_id: params[:id], friend_id: params[:user_id])
      @friendship.destroy
      friendship2.destroy
      render '/api/users/show';
    end
  end

  private 

  def friendship_params 
    params.require(:friendship).permit(:user_id, :friend_id, :status)
  end
end
