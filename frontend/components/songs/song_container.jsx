import { connect } from 'react-redux';
import Song from './song';
import { addSongsToQueue, playSong } from '../../actions/play_queue_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    song: ownProps.song,
    playQueue: state.playQueue
  });
}

const mapDispatchToProps = dispatch => ({
  addSongToQueue: (song) => dispatch(addSongToQueue(song)),
  playSong: (song, songs) => dispatch(playSong(song, songs)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Song);
