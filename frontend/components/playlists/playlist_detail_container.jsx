import { connect } from 'react-redux';
import PlaylistDetail from './playlist_detail';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchUser} from '../../actions/user_actions';
import { playPlaylist } from '../../actions/play_queue_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    owner: state.users[ownProps.params.userId],
    playlist: state.playlists[ownProps.params.playlistId]
  });
}

const mapDispatchToProps = dispatch => ({
  fetchPlaylist: (userId, playlistId) => dispatch(fetchPlaylist(userId, playlistId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  playPlaylist: playlist => dispatch(playPlaylist(playlist)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetail);
