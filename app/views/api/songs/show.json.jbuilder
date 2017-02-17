json.partial! 'api/songs/song', song: @song
json.album_cover @song.album.album_cover
json.artist @song.artist
