import { RECEIVE_USERS, RECEIVE_USER, RECEIVE_USER_FOLLOW, RECEIVE_PLAYLIST_FOLLOW } from '../actions/user_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS: {
      return Object.assign({}, state, action.users);
    }
    case RECEIVE_USER: {
      return Object.assign({}, state, { [action.user.id]: action.user });
    }
    case RECEIVE_PLAYLIST: {
      let result = Object.assign({}, state);
      let user = result[action.playlist.owner_id];
      if (user && !user.playlist_ids.includes(action.playlist.id)) {
        result[action.playlist.owner_id].playlist_ids.push(action.playlist.id);
      }
      return result;
    }
    case RECEIVE_USER_FOLLOW: {
      let result = Object.assign({}, state);
      result[action.follow.follower.id] = action.follow.follower;
      result[action.follow.followee.id] = action.follow.followee;
      return result;
    }
    case RECEIVE_PLAYLIST_FOLLOW: {
      let result = Object.assign({}, state);
      result[action.follow.follower.id] = action.follow.follower;
      return result;
    }
    default: {
      return state;
    }
  }
};

export default UsersReducer;
