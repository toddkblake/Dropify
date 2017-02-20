class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render "api/playlists/index"
  end

  def user_playlists
    @playlists = Playlist.find_by(owner_id: params[:owner_id])
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
    if @playlist.update(playlist_params)
      render "api/playlists/show"
    else
      render json: { base: @playlist.errors.full_messages }, status: 422
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
end
