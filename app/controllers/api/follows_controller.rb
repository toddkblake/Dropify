class Api::FollowsController < ApplicationController
  before_action :ensure_current_user, only: [:create]

  def create
    @follow = Follow.new(playlist_song_params)
    if @follow.save
      @user = @follow.follower
      render "api/users/show"
    else
      render json: { base: @follow.errors.full_messages }, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followable_id, :followable_type)
  end

  def ensure_current_user
    unless current_user.id == params[:follow][:follower_id]
      render json: { base: ["Access denied"] }, status: 403
    end
  end
end
