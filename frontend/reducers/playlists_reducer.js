import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_PLAYLIST_FOLLOW } from '../actions/user_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PLAYLISTS: {
      return Object.assign({}, state, action.playlists);
    }
    case RECEIVE_PLAYLIST: {
      return Object.assign({}, state, { [action.playlist.id]: action.playlist });
    }
    case REMOVE_PLAYLIST: {
      let result = Object.assign({}, state);
      delete result[`${action.playlist.id}`];
      return result;
    }
    case RECEIVE_PLAYLIST_FOLLOW: {
      let result = Object.assign({}, state);
      result[action.follow.playlist.id] = action.follow.playlist;
      return result;
    }
    default: {
      return state;
    }
  }
};

export default PlaylistsReducer;
