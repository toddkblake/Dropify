export const selectUserPlaylists = (playlists, playlistIds) => {
  let userPlaylists = [];
  playlistIds.map(playlistId => {
    userPlaylists.push(playlists[playlistId]);
  });
  return userPlaylists;
}
