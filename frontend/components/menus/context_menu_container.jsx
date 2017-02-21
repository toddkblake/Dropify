import { connect } from 'react-redux';
import ContextMenu from './context_menu';

import {
  setCurrentSong,
  playCurrentSong,
  addSongToQueue
} from '../../actions/play_queue_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    song: ownProps.song,
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: () => dispatch(playCurrentSong()),
  addSongToQueue: (songId) => dispatch(addSongToQueue(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
