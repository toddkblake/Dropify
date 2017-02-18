json.extract! song, :id, :title, :duration, :ord, :audio
json.album do
  json.id song.album.id
  json.title song.album.title
  json.album_cover_large song.album.album_cover(:large)
end
json.artist do
  json.extract! song.artist, :id, :name
end
