class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_playlist_owner, only: [:create, :update, :destroy]

  def create
    @playlist = PlaylistSong.new(playlist_song_params)
    if @playlist.save
      render "api/playlists/show"
    else
      render json: { base: @playlist.errors.full_messages }, status: 422
    end
  end

  def update
    @playlist = PlaylistSong.find(params[:id])
    if @playlist.update(playlist_song_params)
      render "api/playlists/show"
    else
      render json: { base: @playlist.errors.full_messages }, status: 422
    end
  end

  def destroy
    @playlist = PlaylistSong.find(params[:id])
    @playlist.destroy!
    render "api/playlists/show"
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:id, :playlist_id, :song_id)
  end

  def ensure_playlist_owner
    unless current_user.id == params[:playlist][:owner_id].to_i
      render json: { base: ["Access denied"] }, status: 403
    end
  end
end
