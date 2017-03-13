import { connect } from 'react-redux';
import SearchResult from './search_result';
import { clearModal } from '../../actions/modal_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  clearModal: () => dispatch(clearModal()),
  clearSearchResults: () => dispatch(clearSearchResults())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
