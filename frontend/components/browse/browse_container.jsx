import { connect } from 'react-redux';
import Browse from './browse';

const mapStateToProps = state => ({
  browse: state.browse
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId)),
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
