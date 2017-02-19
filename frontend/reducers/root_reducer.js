import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BrowseReducer from './browse_reducer';
import PlayQueueReducer from './play_queue_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  browse: BrowseReducer,
  playQueue: PlayQueueReducer
});

export default RootReducer;
