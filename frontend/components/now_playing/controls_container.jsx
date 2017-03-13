import { connect } from 'react-redux';
import Controls from './controls';
import {
  playCurrentSong,
  pauseCurrentSong,
  fetchCurrentSong,
  nextSong,
  lastSong,
  shuffle,
  unshuffle,
  repeat,
  clearRepeat
} from '../../actions/play_queue_actions';

const mapStateToProps = state => {
  return ({
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    playCurrentSong: () => dispatch(playCurrentSong()),
    pauseCurrentSong: () => dispatch(pauseCurrentSong()),
    nextSong: () => dispatch(nextSong()),
    lastSong: () => dispatch(lastSong()),
    shuffle: () => dispatch(shuffle()),
    unshuffle: () => dispatch(unshuffle()),
    repeat: () => dispatch(repeat()),
    clearRepeat: () => dispatch(clearRepeat())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
