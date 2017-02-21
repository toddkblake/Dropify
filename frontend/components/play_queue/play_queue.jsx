import React from 'react';
import Songs from '../songs/songs';
import Empty from '../loading/empty';

class PlayQueue extends React.Component {

  render () {
    if (!this.props.currentSong.id && this.props.queuedSongs.length === 0) {
      return (
        <Empty
          heading="Empty"
          content="There are no more songs to play in the queue."
          path="/browse"
          linkText="Browse Music"
        />
      );
    }

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
            <h5>Current Song</h5>
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

export default PlayQueue;
