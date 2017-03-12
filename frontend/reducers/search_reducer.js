import merge from 'lodash/merge';

import {
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_SEARCH_ERROR,
  CLEAR_SEARCH_RESULTS,
  CLEAR_SEARCH_ERROR
} from '../actions/search_actions';

const _defaultState = {
  results: null,
  error: null
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS: {
      return merge({}, state, { results: action.results });
    }
    case RECEIVE_SEARCH_ERROR: {
      return merge({}, state, { error: action.error });
    }
    case CLEAR_SEARCH_RESULTS: {
      return merge({}, state, { results: null });
    }
    case CLEAR_SEARCH_ERROR: {
      return merge({}, state, { error: null });
    }
    default: {
      return state;
    }
  }
};

export default SearchReducer;
