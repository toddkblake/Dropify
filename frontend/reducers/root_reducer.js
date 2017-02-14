import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer
});

export default RootReducer;
