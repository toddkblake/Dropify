export const fetchPlaylists = (userId) => {
  return $.ajax({
    method: "GET",
    url: 'api/playlists'
  })
}

export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/playlists`
  })
}

export const fetchPlaylist = (userId, playlistId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}/playlists/${playlistId}`
  })
}

export const createPlaylist = (playlist) => {
  return $.ajax({
    method: "POST",
    url: 'api/playlists/',
    data: { playlist: playlist }
  })
}

export const updatePlaylist = (playlist) => {
  return $.ajax({
    method: "PATCH",
    url: `api/playlists/${playlist.id}`,
    data: { playlist: playlist }
  })
}

export const deletePlaylist = (playlistId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/playlists/${playlistId}`
  })
}
