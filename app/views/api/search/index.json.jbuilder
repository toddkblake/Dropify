json.top_result do
  case
  when @top_result.is_a?(Song)
    json.type = 'Song'
    json.extract! @top_result, :id, :title, :artist
  when @top_result.is_a?(Artist)
    json.type = 'Artist'
    json.extract! @top_result, :id, :name
    json.profile_photo_small @top_result.profile_photo(:small)
  when @top_result.is_a?(Album)
    json.type = 'Album'
    json.extract! @top_result, :id, :title, :artist
  when @top_result.is_a?(Playlist)
    json.type = 'Playlist'
    json.extract! @top_result, :id, :name, :owner
  when @top_result.is_a?(User)
    json.type = 'User'
    json.extract! @top_result, :id, :f_name, :l_name, :username
  end
end

json.songs @songs do |song|
  json.extract! song, :id, :title, :artist
end

json.artists @artists do |artist|
  json.extract! artist, :id, :name
  json.profile_photo_small artist.profile_photo(:small)
end

json.albums @albums do |album|
  json.extract! album, :id, :title, :artist
end

json.playlists @playlists do |playlist|
  json.extract! playlist, :id, :name, :owner
end

json.users @users do |user|
  json.extract! user, :id, :f_name, :l_name, :username
end
