import merge from 'lodash/merge';

import { RECEIVE_ARTISTS, RECEIVE_ARTIST, RECEIVE_ALBUM } from '../actions/browse_actions';

const _defaultState = {
  artists: {},
  artist: {},
  album: {}
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
    default: {
      return state;
    }
  }
};

export default BrowseReducer;
