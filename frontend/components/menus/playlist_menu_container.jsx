import { connect } from 'react-redux';
import PlaylistMenu from './playlist_menu';
import { playPlaylist } from '../../actions/play_queue_actions';
import { deletePlaylist } from '../../actions/playlist_actions';
import { openModal, clearModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    playQueue: state.playQueue,
    modalOpen: state.modalOpen
  });
}

const mapDispatchToProps = dispatch => ({
  playPlaylist: playlist => dispatch(playPlaylist(playlist)),
  deletePlaylist: playlist => dispatch(deletePlaylist(playlist)),
  openModal: modal => dispatch(openModal(modal)),
  clearModal: () => dispatch(clearModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistMenu);
