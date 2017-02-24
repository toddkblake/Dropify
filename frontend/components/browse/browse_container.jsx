import { connect } from 'react-redux';
import Browse from './browse';
import { fetchArtists } from '../../actions/browse_actions';
import { allArtists } from '../../selectors/browse_selectors';

const mapStateToProps = state => ({
  artists: allArtists(state.browse.artists)
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
