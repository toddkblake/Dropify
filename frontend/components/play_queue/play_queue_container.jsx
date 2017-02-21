import { connect } from 'react-redux';
import PlayQueue from './play_queue';
import { allQueuedSongs } from '../../selectors/play_queue_selectors';

const mapStateToProps = state => {
  return ({
    currentSong: state.playQueue.currentSong.song,
    queuedSongs: allQueuedSongs(state.playQueue.queuedSongs)
  });
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayQueue);
