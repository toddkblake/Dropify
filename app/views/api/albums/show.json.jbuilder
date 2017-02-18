json.partial! 'api/albums/album', album: @album
json.songs @album.songs.each do |song|
  json.partial! 'api/songs/song', song: song
end
