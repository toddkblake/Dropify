import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import {
  playCurrentSong,
  pauseCurrentSong
} from '../../actions/play_queue_actions';

const mapStateToProps = state => {
  return ({
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => {
  return ({});
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
