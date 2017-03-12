import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERROR = "RECEIVE_SEARCH_ERROR";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS"

export const fetchSearchResults = (queryString) => dispatch => {
  return SearchApiUtil.fetchSearchResults(queryString).then(
    results => dispatch(receiveSearchResults(results)),
    error => dispatch(receiveSearchError(error.responseJSON.base))
  );
}

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const receiveSearchError = error => ({
  type: RECEIVE_SEARCH_ERROR,
  error
})

export const clearSearchResults = () => {
  type: CLEAR_SEARCH_RESULTS
}
