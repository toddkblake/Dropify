import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    owner: state.users[ownProps.params.userId],
    playlist: state.playlists[ownProps.params.playlistId]
  });
}

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (userId, playlistId) => dispatch(fetchPlaylist(userId, playlistId)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);
