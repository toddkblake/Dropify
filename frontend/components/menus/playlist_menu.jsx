import React from 'react';
import PlaylistForm from '../playlists/playlist_form_container';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router'

class PlaylistMenu extends React.Component {

  handlePlay () {
    this.props.playPlaylist(this.props.playlist);
    this.props.hideMenu();
  }

  handleRename () {
    this.props.hideMenu();
    this.props.unhideForm();
  }

  handleQueue () {
    this.props.addPlaylistToQueue(this.props.playlist);
    this.props.hideMenu();
  }

  handleDelete () {
    this.props.deletePlaylist(this.props.playlist).then(
      this.props.router.push(`/users/${this.props.playlist.owner_id}/collection`)
    );
  }

  render () {
    const name = (this.props.hidden) ? "hidden" : "visible";
    return (
      <div className={ `playlist-menu ${name}` } >
        <ul>
          <li onClick={ this.handlePlay.bind(this) }>
            Play
          </li>
          <li onClick={ this.handleQueue.bind(this) }>
            Add to Play Queue
          </li>
          <li onClick={ this.handleRename.bind(this) }>
            Rename
          </li>
          <li onClick={ this.handleDelete.bind(this) }>
            Delete
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(PlaylistMenu);
