import merge from 'lodash/merge';

import {
  SET_CURRENT_SONG,
  PLAY_CURRENT_SONG,
  PAUSE_CURRENT_SONG
} from '../actions/play_queue_actions';

const _defaultState = {
  currentSong: {
    song: {},
    playing: false,
    restart: false
  },
  queuedSongs: {}
};

const PlayQueueReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG: {
      return merge({}, state, { currentSong: { song: action.song } });
    }
    case PLAY_CURRENT_SONG: {
      return merge({}, state, { currentSong: { playing: true } });
    }
    case PAUSE_CURRENT_SONG: {
      return merge({}, state, { currentSong: { playing: false } });
    }
    default: {
      return state;
    }
  }
};

export default PlayQueueReducer;
