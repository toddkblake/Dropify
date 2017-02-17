import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BrowseReducer from './browse_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  browse: BrowseReducer
});

export default RootReducer;
