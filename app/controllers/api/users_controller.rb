# require 'open-uri'

class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    # add_pfp(@user)
    if @user.save
      login!(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update 
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      render :show
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
  end

  private

  # def add_pfp(user)
  #   if !user.pfp
  #     file = File.open(`https://clamor-aa-dev.s3.us-west-1.amazonaws.com/Pastel-Blue.png`)
  #     user.pfp.attach(io: file, filename: 'Pastel-Blue.png')
  #   end
  # end

  def user_params
    params.require(:user).permit(:username, :password, :email, :tag)
  end

end
