import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { createPlaylist, updatePlaylist } from '../../actions/playlist_actions';
import { clearModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    owner_id: state.session.currentUser.id,
    modalOpen: state.modalOpen
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.formType === "new") ? createPlaylist : updatePlaylist;
  return ({
    action: playlist => dispatch(action(playlist)),
    clearModal: () => dispatch(clearModal())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
