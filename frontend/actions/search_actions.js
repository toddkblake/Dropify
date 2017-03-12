import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const fetchSearchResults = queryString => dispatch => {
  return SearchApiUtil.fetchSearchResults(queryString).then(
    results => dispatch(receiveSearchResults(results)),
    error => console.log(error)
  );
}

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});
