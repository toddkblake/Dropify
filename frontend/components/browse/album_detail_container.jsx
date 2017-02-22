import { connect } from 'react-redux';
import AlbumDetail from './album_detail';
import { fetchAlbum, clearAlbum } from '../../actions/browse_actions';
import { playAlbum } from '../../actions/play_queue_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    artistId: ownProps.params.artistId,
    albumId: ownProps.params.albumId,
    album: state.browse.album
  });
}

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (artistId, albumId) => dispatch(fetchAlbum(artistId, albumId)),
  clearAlbum: () => dispatch(clearAlbum()),
  playAlbum: album => dispatch(playAlbum(album))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);
