import { connect } from 'react-redux';
import Collection from './collection';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.users[ownProps.params.userId],
    playlists: state.playlists,
  });
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
