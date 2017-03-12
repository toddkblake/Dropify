import React from 'react';
import { Link } from 'react-router';
import Songs from '../songs/songs_container';
import Spinner from '../loading/spinner';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchAlbum(this.props.artistId, this.props.albumId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.albumId != this.props.albumId) {
      this.props.fetchAlbum(nextProps.artistId, nextProps.albumId);
    }
  }

  componentWillUnmount() {
    this.props.clearAlbum();
  }

  render () {
    const { album } = this.props;
    if (!album.songs) return (<Spinner />);
    const songs = album.songs;
    return (
      <div className="album-container">
        <div className="album-header">
          <div className="album-header-info">
            <div className="album-cover">
              <img src={ album.album_cover_medium } />
              <div className="album-name">
                <h6>Album</h6>
                <h2>{ album.title }</h2>
              </div>
            </div>
            <ul className="button-row">
              <button className="medium green" onClick={ e => this.props.playAlbum(album) }>Play</button>
            </ul>
            <div className="album-info">
              <p>By <Link to={ `artists/${album.artist.id}` } className="white">{ album.artist.name }</Link> • { album.songs.length } songs</p>
            </div>
          </div>
        </div>
        <Songs songs={ songs } />
      </div>
    );
  }
}

export default AlbumDetail;
