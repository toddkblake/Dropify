import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists().then(
    playlists => dispatch(receivePlaylists(playlists)),
    errors => console.log(errors)
  );
}

export const fetchUserPlaylists = (userId) => dispatch => {
  return PlaylistApiUtil.fetchUserPlaylists(userId).then(
    playlists => dispatch(receivePlaylists(playlists)),
    errors => console.log(errors)
  );
}

export const fetchPlaylist = (userId, playlistId) => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(userId, playlistId).then(
    playlist => dispatch(receivePlaylist(playlist)),
    errors => console.log(errors)
  );
}

export const createPlaylist = playlist => dispatch => {
  return PlaylistApiUtil.createPlaylist(playlist).then(
    playlist => dispatch(receivePlaylist(playlist)),
    errors => console.log(errors)
  )
}

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist).then(
    playlist => dispatch(receivePlaylist(playlist)),
    errors => console.log(errors)
  )
}

export const deletePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.deletePlaylist(playlist).then(
    playlist => dispatch(removePlaylist(playlist)),
    errors => console.log(errors)
  )
}

export const receivePlaylists = playlists => {
  return ({
    type: RECEIVE_PLAYLISTS,
    playlists
  });
}

export const receivePlaylist = playlist => {
  return ({
    type: RECEIVE_PLAYLIST,
    playlist
  });
}

export const removePlaylist = playlist => {
  return ({
    type: REMOVE_PLAYLIST,
    playlist
  });
}
