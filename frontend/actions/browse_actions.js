import * as BrowseApiUtil from '../util/browse_api_util.js';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const CLEAR_ARTIST = "CLEAR_ARTIST";
export const CLEAR_ALBUM = "CLEAR_ALBUM";
export const CLEAR_PLAYLIST = "CLEAR_PLAYLIST";

export const fetchArtists = () => dispatch => {
  return BrowseApiUtil.fetchArtists().then(
    artists => dispatch(receiveArtists(artists)),
    errors => console.log(errors)
  )
}

export const fetchArtist = (artistId) => dispatch => {
  return BrowseApiUtil.fetchArtist(artistId).then(
    artist => dispatch(receiveArtist(artist)),
    errors => console.log(errors)
  )
}

export const fetchAlbum = (artistId, albumId) => dispatch => {
  return BrowseApiUtil.fetchAlbum(artistId, albumId).then(
    album => dispatch(receiveAlbum(album)),
    errors => console.log(errors)
  )
}

export const fetchPlaylists = () => dispatch => {
  return PlaylistApiUtil.fetchPlaylists().then(
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

export const receiveArtists = artists => {
  return ({
    type: RECEIVE_ARTISTS,
    artists
  })
}

export const receiveArtist = artist => {
  return ({
    type: RECEIVE_ARTIST,
    artist
  })
}

export const receiveAlbum = album => {
  return ({
    type: RECEIVE_ALBUM,
    album
  })
}

export const receivePlaylists = playlists => {
  return ({
    type: RECEIVE_PLAYLISTS,
    playlist
  });
}

export const receivePlaylist = playlist => {
  return ({
    type: RECEIVE_PLAYLIST,
    playlist
  });
}

export const clearArtist = () => ({ type: CLEAR_ARTIST })

export const clearAlbum = () => ({ type: CLEAR_ALBUM })

export const clearPlaylist = () => ({ type: CLEAR_PLAYLIST })
