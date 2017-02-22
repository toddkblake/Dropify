class Api::PlaylistSongsController < ApplicationController
  before_action :ensure_playlist_owner, only: [:create]

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      @playlist = @playlist_song.playlist
      render "api/playlists/show"
    else
      render json: { base: @playlist_song.errors.full_messages }, status: 422
    end
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:playlist_id, :song_id)
  end

  def ensure_playlist_owner
    playlist = Playlist.find(params[:playlist_song][:playlist_id])
    unless current_user.id == playlist.owner.id
      render json: { base: ["Access denied"] }, status: 403
    end
  end
end
