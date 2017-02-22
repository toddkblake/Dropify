import React from 'react';
import { withRouter } from 'react-router';

class SongMenu extends React.Component {
  constructor (props) {
    super(props);
  }

  handlePlay () {
    this.props.setCurrentSong(this.props.song);
    this.props.playCurrentSong();
  }

  handleQueue () {
    this.props.addSongToQueue(this.props.song);
  }

  handleAddToPlaylist (playlist) {
    return function (e) {
      e.preventDefault();
      this.props.addSongToPlaylist(this.props.song.id, playlist.id)
    }
  }

  handleDelete () {
    const playlist = this.props.playlists[this.props.params.playlistId];
    this.props.deleteSongFromPlaylist(this.props.song.id, playlist);
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
        <ul className="playlists-menu">
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
      <div className={`song-menu ${ this.props.hidden }`} >
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
