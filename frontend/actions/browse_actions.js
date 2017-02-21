import * as BrowseApiUtil from '../util/browse_api_util.js';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const CLEAR_ARTIST = "CLEAR_ARTIST";
export const CLEAR_ALBUM = "CLEAR_ALBUM";

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

export const clearArtist = () => ({ type: CLEAR_ARTIST })

export const clearAlbum = () => ({ type: CLEAR_ALBUM })
