import React from 'react';
import PlaylistForm from '../playlists/playlist_form_container';
import ReactDOM from 'react-dom';

class PlaylistMenu extends React.Component {

  handlePlay () {
    this.props.setCurrentSong(this.props.playlist.songs[0]);
    this.props.playCurrentSong();
    this.props.playlist.songs.shift();
    this.props.addPlaylistToQueue(this.props.playlist);
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
    this.props.deletePlaylist(this.props.playlist.id);
    this.props.hideMenu();
  }

  // componentDidMount() {
  //   document.addEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // handleClickOutside(event) {
  //   const domNode = ReactDOM.findDOMNode(this);
  //
  //   if ((!domNode || !domNode.contains(event.target))) {
  //     this.props.hideMenu();
  //   }
  // }

  render () {
    return (
      <div className={ `playlist-menu ${this.props.hidden}` } >
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

export default PlaylistMenu;
