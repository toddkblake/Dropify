import React from 'react';
import Songs from '../songs/songs';
import { withRouter } from 'react-router';

class PlayQueue extends React.Component {

  handleClick () {
    this.props.router.push('/browse');
  }

  render () {
    if (!this.props.currentSong.id && this.props.queuedSongs.length) {
      return (
        <div className="play-queue-container">
          <div className="empty-queue">
            <h2>Empty</h2>
            <p>There are no more songs to play in the queue.</p>
            <button className="medium green" onClick={ this.handleClick.bind(this) }>Browse Music</button>
          </div>
        </div>
      );
    }
    debugger
    let currentSong;
    let queuedSongs;
    if (this.props.currentSong.id) {
      currentSong = (<Songs songs={ [this.props.currentSong] } />);
    }
    if (this.props.queuedSongs.length) {
      queuedSongs = (<Songs songs={ this.props.queuedSongs } />)
    }

    return (
      <div className="play-queue-container">
        <div className="play-queue-header">
          <h1>Play Queue</h1>
        </div>
        <div className="current-song-container">
          <div className="current-song-header">
            <h5>Current Track</h5>
          </div>
          { currentSong }
        </div>
        <div className="queued-songs-container">
          <div className="queued-songs-header">
            <h5>Queued Songs</h5>
          </div>
          { queuedSongs }
        </div>
      </div>
    );
  }
}

export default withRouter(PlayQueue);
