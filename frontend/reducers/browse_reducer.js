import {
  RECEIVE_ARTISTS,
  RECEIVE_ARTIST,
  RECEIVE_ALBUM,
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  CLEAR_ARTIST,
  CLEAR_ALBUM,
  CLEAR_PLAYLIST
} from '../actions/browse_actions';

const _defaultState = {
  artists: {},
  artist: {},
  album: {},
  playlists: {},
  playlist: {}
};

const BrowseReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTISTS: {
      return Object.assign({}, state, { artists: action.artists });
    }
    case RECEIVE_ARTIST: {
      return Object.assign({}, state, { artist: action.artist });
    }
    case RECEIVE_ALBUM: {
      return Object.assign({}, state, { album: action.album });
    }
    case RECEIVE_PLAYLISTS: {
      return Object.assign({}, state, { playlists: action.playlists });
    }
    case RECEIVE_PLAYLIST: {
      return Object.assign({}, state, { playlist: action.playlist });
    }
    case CLEAR_ARTIST: {
      let result = Object.assign({}, state);
      return Object.assign(result, { artist: {} });
    }
    case CLEAR_ALBUM: {
      let result = Object.assign({}, state);
      return Object.assign(result, { album: {} });
    }
    case CLEAR_PLAYLIST: {
      let result = Object.assign({}, state);
      return Object.assign(result, { playlist: {} });
    }
    default: {
      return state;
    }
  }
};

export default BrowseReducer;
