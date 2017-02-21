import React from 'react';

class ContextMenu extends React.Component {

  handleClick () {
    this.props.setCurrentSong(song);
    this.props.playCurrentSong();
  }

  render () {
    return (
      <div className="context-menu">
        <ul>
          <li onClick={ this.handleClick.bind(this) }>
            Play
          </li>
          <li onClick={ this.props.addSongToQueue(this.props.song) }>
            Add to Play Queue
          </li>
          <li onClick={ this.props.addSongToPlaylist(this.props.song) }>
            Add to:
          </li>
        </ul>
      </div>
    );
  }
}
