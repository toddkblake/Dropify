import { connect } from 'react-redux';
import Browse from './browse';
import { fetchArtists } from '../../actions/browse_actions';

const mapStateToProps = state => ({
  artists: Object.values(state.browse.artists)
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
