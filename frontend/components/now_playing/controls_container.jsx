import { connect } from 'react-redux';
import Controls from './controls';
import {
  playCurrentSong,
  pauseCurrentSong,
  fetchCurrentSong
} from '../../actions/play_queue_actions';

const mapStateToProps = state => {
  return ({
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    playCurrentSong: () => dispatch(playCurrentSong()),
    pauseCurrentSong: () => dispatch(pauseCurrentSong())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
