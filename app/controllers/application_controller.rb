class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in!
    unless logged_in?
      render json: { base: ["You must be logged in to access this page"] }, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :f_name, :l_name)
  end
end
