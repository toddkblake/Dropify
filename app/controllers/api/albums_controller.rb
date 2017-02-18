class Api::AlbumsController < ApplicationController
  def show
    @album = Album.includes(:songs).order("songs.ord asc").find(params[:id])
    if @album
      render "api/albums/show"
    else
      render json: { base: ["Album not found"] }, status: 404
    end
  end
end
