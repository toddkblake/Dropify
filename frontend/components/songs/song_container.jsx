import { connect } from 'react-redux';
import Song from './song';
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
  addSongToQueue: (song) => dispatch(addSongToQueue(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
