import { connect } from 'react-redux';
import AlbumDetail from './album_detail';
import { fetchAlbum } from '../../actions/browse_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    artistId: ownProps.params.artistId,
    albumId: ownProps.params.albumId,
    album: state.browse.album
  });
}

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (artistId, albumId) => dispatch(fetchAlbum(artistId, albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
