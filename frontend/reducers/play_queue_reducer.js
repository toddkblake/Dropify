import merge from 'lodash/merge';

import {
  SET_CURRENT_SONG,
  PLAY_CURRENT_SONG,
  PAUSE_CURRENT_SONG,
  NEXT_SONG,
  ADD_SONG,
  ADD_PLAYLIST,
  PLAY_ALBUM,
  PLAY_PLAYLIST,
  CLEAR_PLAY_QUEUE
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
    case NEXT_SONG: {
      let result = merge({}, state);
      if (result.queuedSongs.order[0]) {
        const nextSong = result.queuedSongs.songs[result.queuedSongs.order[0]]
        result.currentSong.song = nextSong;
        result.queuedSongs.order.shift();
        return result;
      } else {
        return result;
      }
    }
    case ADD_SONG: {
      let result = merge({}, state, { queuedSongs: { songs: { [action.song.id]: action.song } } });
      result.queuedSongs.order.push(action.song.id);
      return result;
    }
    case PLAY_ALBUM: {
      let result = merge({}, _defaultState);
      result.currentSong.song = action.album.songs[0];
      result.currentSong.playing = true;
      action.album.songs.slice(1).forEach(song => {
        result.queuedSongs.order.push(song.id);
        result.queuedSongs.songs[song.id] = song;
      })
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
    case PLAY_PLAYLIST: {
      let result = merge({}, _defaultState);
      result.currentSong.song = action.playlist.songs[0];
      result.currentSong.playing = true;
      action.playlist.songs.slice(1).forEach(song => {
        result.queuedSongs.order.push(song.id);
        result.queuedSongs.songs[song.id] = song;
      })
      return result;
    }
    case CLEAR_PLAY_QUEUE: {
      return _defaultState;
    }
    default: {
      return state;
    }
  }
};

export default PlayQueueReducer;
