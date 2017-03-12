import { connect } from 'react-redux';
import SearchResultsSection from './search_results_section';
import { setCurrentSong, playCurrentSong } from '../../actions/play_queue_actions';
import { clearModal } from '../../actions/modal_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: (song) => dispatch(playCurrentSong(song)),
  clearModal: () => dispatch(clearModal()),
  clearSearchResults: () => dispatch(clearSearchResults())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsSection);
