import React from 'react';
import PlaylistForm from '../playlists/playlist_form_container';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import Dropdown from './dropdown';

class PlaylistMenu extends React.Component {

  handlePlay (e) {
    this.props.playPlaylist(this.props.playlist);
    this.props.clearModal();
  }

  handleRename (e) {
    this.props.openModal('playlist-form');
  }

  handleDelete (e) {
    this.props.deletePlaylist(this.props.playlist).then(
      this.props.router.push(`/users/${this.props.playlist.owner_id}/collection`)
    );
  }

  render () {
    return (
      <Dropdown isOpen={ this.props.modalOpen === "playlist-menu" }>
        <div id="playlist-menu" className="dropdown-menu" >
          <ul>
            <li onClick={ this.handlePlay.bind(this) }>
              <p>Play</p>
            </li>
            <li onClick={ this.handleRename.bind(this) }>
              <p>Rename</p>
            </li>
            <li onClick={ this.handleDelete.bind(this) }>
              <p>Delete</p>
            </li>
          </ul>
        </div>
      </Dropdown>
    );
  }
}

export default withRouter(PlaylistMenu);
