import React from 'react';

class SongMenu extends React.Component {

  handleClick () {
    this.props.setCurrentSong(song);
    this.props.playCurrentSong();
  }

  render () {
    return (
      <div className={`context-menu ${ this.props.hidden }`} >
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

export default SongMenu;
