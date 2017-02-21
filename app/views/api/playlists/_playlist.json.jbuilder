json.extract! playlist, :id, :name, :owner_id
json.photo_small playlist.photo(:small)
json.photo_medium playlist.photo(:medium)
json.photo_large playlist.photo(:large)
json.songs do
  json.array! playlist.songs do |song|
    json.partial! 'api/songs/song', song: song
  end
end
