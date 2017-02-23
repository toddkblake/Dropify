import { connect } from 'react-redux';
import UserDetail from './user_detail';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.users[ownProps.params.userId],
    playlists: state.playlists
  });
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
