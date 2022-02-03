class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only:[:destroy]
  
  def create 
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: ['Username or Password does not exist!'], status: 401
    else
      login!(@user)
      render '/api/users/show'
    end
  end

  def destroy  
    if current_user.nil?
      render json: ["No user logged in"], status: 404
    else 
      logout 
      render json: {}
    end
  end

end
