import * as BrowseApiUtil from '../util/browse_api_util.js';

export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

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

export const fetchAlbum = (albumId) => dispatch => {
  return BrowseApiUtil.fetchAlbum(albumId).then(
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