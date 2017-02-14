class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: { base: ["Invalid username / password combination"] }, status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!(@user)
      render "api/users/show"
    else
      render json: { base: ["User not found"] }, status: 404
    end
  end
end
