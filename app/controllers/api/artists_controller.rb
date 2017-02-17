class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.order(:name)
    render "api/artists/index"
  end

  def show
    @artist = Artist.includes(:albums).find(params[:id])
    if @artist
      render "api/artists/show"
    else
      render json: { base: ["Artist not found"] }, status: 404
    end
  end
end
