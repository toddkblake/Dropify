import { connect } from 'react-redux';
import SongMenu from './song_menu';

import {
  setCurrentSong,
  playCurrentSong,
  addSongToQueue
} from '../../actions/play_queue_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    song: ownProps.song,
    playQueue: state.playQueue,
    hidden: ownProps.hidden
  });
}

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: () => dispatch(playCurrentSong()),
  addSongToQueue: (songId) => dispatch(addSongToQueue(songId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongMenu);
