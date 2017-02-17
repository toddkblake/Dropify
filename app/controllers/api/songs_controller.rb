class Api::SongsController < ApplicationController
  def show
    @song = Song.find(params[:id])
    if @song
      render "api/songs/show"
    else
      render json: { base: ["Song not found"] }, status: 404
    end
  end
end
