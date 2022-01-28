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
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

  # def ensure_pfp
  #   colors = ["discordblackicon.png",
  #           "discordblueicon.png",
  #           "discordorangeicon.png",
  #           "discordyellowicon.png",
  #           "discordgreenicon.png",
  #           "discordpurpleicon.png"
  #             ]

  #   color = colors.sample

  #   if !self.pfp.attached?
  #     file = File.open(`app/assets/images/#{color}`)
  #     self.pfp.attach(io: file, filename: color)
  #   end
  # end
end
