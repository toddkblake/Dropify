import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { createPlaylist, updatePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    formType: ownProps.formType,
    hidden: ownProps.hidden,
    owner_id: state.session.currentUser.id
  });
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.formType === "new") ? createPlaylist : updatePlaylist
  return { action: playlist => dispatch(action(playlist)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);
