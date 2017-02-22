import { connect } from 'react-redux';
import PlaylistMenu from './playlist_menu';
import { setCurrentSong, playCurrentSong, addPlaylistToQueue } from '../../actions/play_queue_actions';
import { deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: () => dispatch(playCurrentSong()),
  addPlaylistToQueue: (playlist) => dispatch(addPlaylistToQueue(playlist)),
  deletePlaylist: playlist => dispatch(deletePlaylist(playlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistMenu);
