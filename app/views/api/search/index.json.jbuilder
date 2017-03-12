json.top_result do
  case
  when @top_result.is_a?(Song)
    json.type 'Song'
    json.partial! 'song', song: @top_result
  when @top_result.is_a?(Artist)
    json.type 'Artist'
    json.partial! 'artist', artist: @top_result
  when @top_result.is_a?(Album)
    json.type 'Album'
    json.partial! 'album', album: @top_result
  when @top_result.is_a?(Playlist)
    json.type 'Playlist'
    json.partial! 'playlist', playlist: @top_result
  when @top_result.is_a?(User)
    json.type 'User'
    json.partial! 'user', user: @top_result
  end
end

json.songs @songs do |song|
  json.partial! 'song', song: song
end

json.artists @artists do |artist|
  json.partial! 'artist', artist: artist
end

json.albums @albums do |album|
  json.partial! 'album', album: album
end

json.playlists @playlists do |playlist|
  json.partial! 'playlist', playlist: playlist
end

json.users @users do |user|
  json.partial! 'user', user: user
end
