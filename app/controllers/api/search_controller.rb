class Api::SearchController < ApplicationController

  def index
    search_results = PgSearch.multisearch(params[:query]).includes(:searchable)
    if search_results.length > 0
      @top_result = search_results.first.searchable
      @songs = search_results.select { |result| result.searchable_type === 'Song' }.take(3).map { |result| result.searchable }
      @artists = search_results.select { |result| result.searchable_type === 'Artist' }.take(3).map { |result| result.searchable }
      @albums = search_results.select { |result| result.searchable_type === 'Album' }.take(3).map { |result| result.searchable }
      @playlists = search_results.select { |result| result.searchable_type === 'Playlist' }.take(3).map { |result| result.searchable }
      @users = search_results.select { |result| result.searchable_type === 'User' }.take(3).map { |result| result.searchable }
      render "api/search/index"
    else
      render json: { base: ["No results found for #{params[:query]}"] }, status: 422
    end
  end
end
