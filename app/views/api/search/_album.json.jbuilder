json.extract! album, :id, :title
json.album_cover_small album.album_cover(:small)
json.artist_name album.artist.name
json.artist_id album.artist.id
