import React from 'react';
import { Link } from 'react-router';
import Songs from '../songs/songs';
import Spinner from '../loading/spinner';

class PlaylistDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.userId, this.props.params.playlistId);
    this.props.fetchUser(this.props.params.userId);
  }

  render () {
    if (!this.props.playlist || !this.props.owner) return (<Spinner/>);
    const { playlist, owner } = this.props;
    return (
      <div className="playlist-container">
        <div className="playlist-header">
          <div className="playlist-header-info">
            <div className="playlist-photo">
              <img src={ playlist.photo_medium } />
              <div className="playlist-name">
                <h6>Playlist</h6>
                <h2>{ playlist.name }</h2>
              </div>
            </div>
            <ul className="button-row">
              <button className="medium green">Play</button>
              <button className="medium">Follow</button>
              <button className="round"><i className="fa fa-ellipsis-h"></i></button>
            </ul>
            <div className="playlist-info">
              <p>By <Link to={ `users/${playlist.owner_id}` } className="white">{ `${owner.f_name} ${owner.l_name}` }</Link> • { playlist.songs.length } songs</p>
            </div>
          </div>
        </div>
        <Songs songs={ playlist.songs } />
      </div>
    );
  }
}

export default PlaylistDetail;
