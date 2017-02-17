json.partial! 'api/artists/artist', artist: @artist
json.albums @artist.albums.each do |album|
  json.partial! 'api/albums/album', album: album
end
