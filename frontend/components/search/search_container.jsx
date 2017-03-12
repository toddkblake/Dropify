import { connect } from 'react-redux';
import Search from './search';
import {
  fetchSearchResults,
  clearSearchResults,
  clearSearchError
 } from '../../actions/search_actions';

const mapStateToProps = state => ({
  search: state.search
})

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: (queryString) => dispatch(fetchSearchResults(queryString)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  clearSearchError: () => dispatch(clearSearchError())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
