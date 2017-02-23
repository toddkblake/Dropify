class Api::PlaylistsController < ApplicationController
  before_action :ensure_playlist_owner, only: [:create, :update, :destroy]

  def index
    if params[:user_id]
      @playlists = Playlist.includes(:songs, :followers).where(owner_id: params[:user_id])
    else
      @playlists = Playlist.all
    end
    render "api/playlists/index"
  end

  def show
    @playlist = Playlist.find(params[:id])
    if @playlist
      render "api/playlists/show"
    else
      render json: { base: ["Playlist not found"] }, status: 404
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render "api/playlists/show"
    else
      render json: { base: @playlist.errors.full_messages }, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if params.include?(:song_id)
      playlist_song = @playlist.playlist_songs.find_by(song_id: params[:song_id])
      if playlist_song
        playlist_song.destroy!
        render "api/playlists/show"
      else
        render json: { base: ["Song is not on playlist"] }, status: 422
      end
    else
      if @playlist.update(playlist_params)
        render "api/playlists/show"
      else
        render json: { base: @playlist.errors.full_messages }, status: 422
      end
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy!
    render "api/playlists/show"
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :owner_id, :photo)
  end

  def ensure_playlist_owner
    unless current_user.id == params[:playlist][:owner_id].to_i
      render json: { base: ["Access denied"] }, status: 403
    end
  end
end
