class UsersController < ApplicationController

  def edit
    @user = current_user
  end

  def update
    current_user.update(user_params)
    redirect_to home_path 
  end

  private

  def user_params
    params.require(:user).permit(:name, :avatar)
  end

end
