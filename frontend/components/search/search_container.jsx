import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  search: state.search
})

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: (queryString) => dispatch(fetchSearchResults(queryString)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
