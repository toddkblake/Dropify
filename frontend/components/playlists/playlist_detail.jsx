import React from 'react';
import { Link } from 'react-router';
import Songs from '../songs/songs_container';
import Spinner from '../loading/spinner';
import PlaylistMenu from '../menus/playlist_menu_container';
import PlaylistForm from './playlist_form_container';

class PlaylistDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.userId, this.props.params.playlistId);
    this.props.fetchUser(this.props.params.userId);
  }

  handleModal (e) {
    this.props.openModal('playlist-menu');
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
              <button className="medium green" onClick={ e => this.props.playPlaylist(playlist) }>Play</button>
              <button className="medium">Follow</button>
              <div className="dropdown-anchor">
                <button className="round" onClick={ this.handleModal.bind(this) }>
                  <i className="fa fa-ellipsis-h">
                  </i>
                </button>
                <PlaylistMenu playlist={ playlist } />
                <PlaylistForm formType="edit" playlist={ playlist } />
              </div>
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
