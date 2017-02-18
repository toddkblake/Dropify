import React from 'react';
import { Link } from 'react-router';
import Songs from '../songs/songs';

class AlbumDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchAlbum(this.props.artistId, this.props.albumId);
  }

  render () {
    const { album } = this.props;
    const songs = album.songs;
    if (!songs) return (<div>loading...</div>);
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
              <button className="medium green">Play</button>
              <button className="medium">Save</button>
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
