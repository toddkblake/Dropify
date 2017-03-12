import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearPlayQueue } from '../../actions/play_queue_actions';
import { clearSearchResults } from '../../actions/search_actions';
import { openModal } from '../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearPlayQueue: () => dispatch(clearPlayQueue()),
  clearSearchResults: () => dispatch(clearSearchResults()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
