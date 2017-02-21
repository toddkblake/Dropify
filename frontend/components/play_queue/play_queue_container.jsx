import { connect } from 'react-redux';
import PlayQueue from './play_queue';

const mapStateToProps = state => {
  return ({
    currentSong: state.playQueue.currentSong.song,
    queuedSongs: Object.values(state.playQueue.queuedSongs)
  })
}

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayQueue);
