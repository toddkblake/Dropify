import merge from 'lodash/merge';

import {
  SET_CURRENT_SONG,
  PLAY_CURRENT_SONG,
  PAUSE_CURRENT_SONG,
  NEXT_SONG,
  LAST_SONG,
  ADD_SONG,
  ADD_SONGS,
  SHUFFLE,
  UNSHUFFLE,
  REPEAT,
  CLEAR_REPEAT,
  CLEAR_PLAY_QUEUE,
  RESET_PLAY_QUEUE
} from '../actions/play_queue_actions';

import { rotateOrder, updateOrder } from '../selectors/play_queue_selectors';

const _defaultState = {
  currentSong: {
    song: {},
    playing: false,
    restart: false
  },
  queuedSongs: {
    songs: {},
    order: [],
    shuffledOrder: [],
    previousOrder: [],
    originalOrder: []
  },
  shuffled: false,
  repeat: false
};

const PlayQueueReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_CURRENT_SONG: {
      let result = merge({}, state, { currentSong: { song: action.song } });
      let idx = result.queuedSongs.order.indexOf(action.song.id);
      result.queuedSongs.originalOrder = result.queuedSongs.order;
      result.queuedSongs.previousOrder = result.queuedSongs.order.slice(0, idx);
      result.queuedSongs.order = result.queuedSongs.order.slice(idx + 1);
      return result;
    }
    case PLAY_CURRENT_SONG: {
      return merge({}, state, { currentSong: { playing: true } });
    }
    case PAUSE_CURRENT_SONG: {
      return merge({}, state, { currentSong: { playing: false } });
    }
    case NEXT_SONG: {
      let result = merge({}, state);

      let currentSongId = result.currentSong.song.id
      if (result.shuffled) {
        if (result.queuedSongs.shuffledOrder.length > 0) {
          let nextSong = result.queuedSongs.songs[result.queuedSongs.shuffledOrder[0]]
          result.currentSong.song = nextSong;

          result.queuedSongs.shuffledOrder.shift();
          result.queuedSongs.previousOrder.push(currentSongId);
          if (result.repeat) {
            result.queuedSongs.shuffledOrder.push(currentSongId);
          }
        }
      } else {
        if (result.queuedSongs.order.length > 0) {
          let nextSong = result.queuedSongs.songs[result.queuedSongs.order[0]]
          result.currentSong.song = nextSong;

          result.queuedSongs.order.shift();
          result.queuedSongs.previousOrder.push(currentSongId);
          if (result.repeat) {
            result.queuedSongs.order.push(currentSongId);
          }
        }
      }

      return result;
    }
    case LAST_SONG: {
      let result = merge({}, state);
      if (result.repeat) {
        let currentSongId = result.currentSong.song.id;
        result.queuedSongs.order.unshift(currentSongId);
        let lastSongId = result.queuedSongs.order.pop();
        let lastSong = result.queuedSongs.songs[lastSongId];
        result.currentSong.song = lastSong;
      } else {
        if (result.queuedSongs.previousOrder.length > 0) {
          if (result.shuffled) {
            result.queuedSongs.shuffledOrder.unshift(result.currentSong.song.id);
          } else {
            result.queuedSongs.order.unshift(result.currentSong.song.id);
          }
          let lastSong = result.queuedSongs.songs[result.queuedSongs.previousOrder.pop()];
          result.currentSong.song = lastSong;
        }
      }

      return result;
    }
    case ADD_SONG: {
      let result = merge({}, state, { queuedSongs: { songs: { [action.song.id]: action.song } } });
      result.queuedSongs.order.push(action.song.id);
      return result;
    }
    case ADD_SONGS: {
      let result = merge({}, state);
      action.songs.forEach(song => {
        result.queuedSongs.order.push(song.id);
        result.queuedSongs.songs[song.id] = song;
      })
      return result;
    }
    case SHUFFLE: {
      let result = merge({}, state, { shuffled: true });
      if (result.queuedSongs.order.length > 0) {
        let sortedOrder = result.queuedSongs.order.slice(0);
        result.queuedSongs.shuffledOrder = sortedOrder.sort((a, b) => 0.5 - Math.random());
      }
      return result;
    }
    case UNSHUFFLE: {
      let result = merge({}, state, { shuffled: false });
      result.queuedSongs.shuffledOrder = [];
      let currentSongId = result.currentSong.song.id
      let currentSongIdx = result.queuedSongs.originalOrder.indexOf(currentSongId);
      result.queuedSongs.order = result.queuedSongs.originalOrder.slice(currentSongIdx + 1);
      result.queuedSongs.previousOrder = result.queuedSongs.originalOrder.slice(0, currentSongIdx);
      return result;
    }
    case REPEAT: {
      let result = merge({}, state, { repeat: true });
      return result;
    }
    case CLEAR_REPEAT: {
      let result = merge({}, state, { repeat: false });
      return result;
    }
    case CLEAR_PLAY_QUEUE: {
      return Object.assign({}, state, {
        currentSong: {
          song: {},
          playing: false,
          restart: false
        },
        queuedSongs: {
          songs: {},
          order: [],
          shuffledOrder: [],
          previousOrder: [],
          originalOrder: []
        }
      });
    }
    case RESET_PLAY_QUEUE: {
      return _defaultState;
    }
    default: {
      return state;
    }
  }
};

export default PlayQueueReducer;
