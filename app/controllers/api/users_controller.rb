class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    # @user.ensure_pfp
    if @user.save
      login!(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update 
    @user = User.find_by(id: params[:id])
    if @user.update
      render :show
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  def delete
    @user = User.find_by(id: params[:id])
    @user.destroy
    redirect_to '/'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :tag)
  end

end
