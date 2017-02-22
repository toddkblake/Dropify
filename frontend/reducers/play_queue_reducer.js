import merge from 'lodash/merge';

import {
  SET_CURRENT_SONG,
  PLAY_CURRENT_SONG,
  PAUSE_CURRENT_SONG,
  ADD_PLAYLIST,
  ADD_SONG
} from '../actions/play_queue_actions';

const _defaultState = {
  currentSong: {
    song: {},
    playing: false,
    restart: false
  },
  queuedSongs: {
    songs: {},
    order: [],
    repeat: true
  }
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
    case ADD_SONG: {
      let result = merge({}, state, { queuedSongs: { songs: { [action.song.id]: action.song } } });
      result.queuedSongs.order.push(action.song.id);
      return result;
    }
    case ADD_PLAYLIST: {
      let result = merge({}, state);
      action.playlist.songs.forEach(song => {
        result.queuedSongs.order.push(song.id);
        result.queuedSongs.songs[song.id] = song;
      })
      return result;
    }
    default: {
      return state;
    }
  }
};

export default PlayQueueReducer;
