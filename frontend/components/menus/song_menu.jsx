import React from 'react';
import { withRouter } from 'react-router';

class SongMenu extends React.Component {
  constructor (props) {
    super(props);
  }

  handlePlay () {
    this.props.setCurrentSong(this.props.song);
    this.props.playCurrentSong();
    this.props.clearModal();
  }

  handleQueue () {
    this.props.addSongToQueue(this.props.song);
    this.props.clearModal();
  }

  handleAddToPlaylist (playlist) {
    return function (e) {
      e.preventDefault();
      this.props.addSongToPlaylist(this.props.song.id, playlist.id);
      this.props.clearModal();
    }
  }

  handleDelete () {
    const playlist = this.props.playlists[this.props.params.playlistId];
    this.props.deleteSongFromPlaylist(this.props.song.id, playlist);
    this.props.clearModal();
  }

  render () {
    if (this.props.params.playlistId) {
      this.delete = (
        <li onClick={ this.handleDelete.bind(this) }>
          Delete
        </li>
      );
    }

    if (this.props.userPlaylists) {
      this.userPlaylists = (
        <ul id={ `playlist-menu-${ this.props.song.id }` } className="playlists-menu">
          {
            this.props.userPlaylists.map(playlist => (
              <li key={ playlist.id } onClick={ this.handleAddToPlaylist(playlist).bind(this) }>
                { playlist.name }
              </li>
            ))
          }
        </ul>
      )
    }

    return (
      <div id={`song-menu-${ this.props.song.id }`} className="song-menu" >
        <ul>
          <li onClick={ this.handlePlay.bind(this) }>
            <p>Play</p>
          </li>
          <li onClick={ this.handleQueue.bind(this) }>
            <p>Add to Play Queue</p>
          </li>
          <li onClick={ this.handleAddToPlaylist.bind(this) }>
            <p>Add to:</p>
            { this.userPlaylists }
          </li>
          { this.delete }
        </ul>
      </div>
    );
  }
}

export default withRouter(SongMenu);
