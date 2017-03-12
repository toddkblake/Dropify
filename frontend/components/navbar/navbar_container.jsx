import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearPlayQueue } from '../../actions/play_queue_actions';
import { clearSearchResults } from '../../actions/search_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearPlayQueue: () => dispatch(clearPlayQueue()),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
