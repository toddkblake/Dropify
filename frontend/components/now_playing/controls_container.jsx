import { connect } from 'react-redux';
import Controls from './controls';
import {
  playCurrentSong,
  pauseCurrentSong,
  fetchCurrentSong,
  nextSong
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
    nextSong: () => dispatch(nextSong())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
