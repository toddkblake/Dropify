import { connect } from 'react-redux';
import Songs from './songs';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import {
  setCurrentSong,
  playCurrentSong,
  addSongToQueue
} from '../../actions/play_queue_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    song: ownProps.song,
    playQueue: state.playQueue,
    currentUser: state.session.currentUser
  });
}

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: () => dispatch(playCurrentSong()),
  addSongToQueue: (song) => dispatch(addSongToQueue(song)),
  fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
