import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BrowseReducer from './browse_reducer';
import PlayQueueReducer from './play_queue_reducer';
import PlaylistsReducer from './playlists_reducer';
import UsersReducer from './users_reducer';
import ModalReducer from './modal_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  browse: BrowseReducer,
  playlists: PlaylistsReducer,
  users: UsersReducer,
  playQueue: PlayQueueReducer,
  modalOpen: ModalReducer,
  search: SearchReducer
});

export default RootReducer;
