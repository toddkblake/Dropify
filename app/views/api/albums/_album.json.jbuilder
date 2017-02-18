json.extract! album, :id, :title, :artist, :album_cover
json.album_cover_large album.album_cover(:large)
json.album_cover_medium album.album_cover(:medium)
json.album_cover_small album.album_cover(:small)
