import merge from 'lodash/merge';

import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const _defaultState = {
  results: null
};

const SearchReducer = (state = _defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS: {
      return merge({}, { results: action.results });
    }
    case CLEAR_SEARCH_RESULTS: {
      return _defaultState;
    }
    default: {
      return state;
    }
  }
};

export default SearchReducer;
