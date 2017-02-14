import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return merge({}, state, { currentUser: action.currentUser, errors: [] });
    }
    case RECEIVE_ERRORS: {
      return merge({}, state, { currentUser: null, errors: action.errors });
    }
    case CLEAR_ERRORS: {
      return Object.assign({}, state, { errors: [] });
    }
    default: {
      return state;
    }
  }
};

export default SessionsReducer;
