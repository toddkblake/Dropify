import React from 'react';
import { duration } from '../../util/music_util';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    }
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount() {
    this.audioEl = document.getElementById('audio-element')
    this.audioEl.addEventListener('timeupdate', this.updateProgress);
  }

  updateProgress (e) {
    const currentTime = Math.floor(e.currentTarget.currentTime);
    this.setState({ currentTime });
  }

  render () {
    const currentTime = this.state.currentTime;
    const currentSong = this.props.currentSong;
    return (
      <div className="song-progress">
        <progress id="song-progress-bar" value={ currentTime / currentSong.song.duration } max="1"></progress>
        <ul className="song-progress-info">
          <li>
            <p>{ duration(this.state.currentTime) }</p>
          </li>
          <li>
            <p>{ duration(currentSong.song.duration) }</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProgressBar;
