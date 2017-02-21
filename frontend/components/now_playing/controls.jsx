import React from 'react';
import { withRouter } from 'react-router';

class Controls extends React.Component {

  componentDidMount() {
    this.audioEl = document.getElementById('audio-element')
    this.audioEl.addEventListener('timeupdate', this.updateProgress);
  }

  play () {
    this.props.playCurrentSong();
  }

  pause () {
    this.props.pauseCurrentSong();
  }

  render () {
    const currentSong = this.props.playQueue.currentSong;
    let play_pause_button;
    if (currentSong.playing) {
      play_pause_button = <i className="fa fa-pause-circle-o large" onClick={ this.pause.bind(this) }></i>
    } else {
      play_pause_button = <i className="fa fa-play-circle-o large" onClick={ this.play.bind(this) }></i>
    }
    return (
      <div className="controls">
        <ul className="play-pause-row">
          <li>
            <i className="fa fa-step-backward medium"></i>
          </li>
          <li>
            { play_pause_button }
          </li>
          <li>
            <i className="fa fa-step-forward medium"></i>
          </li>
        </ul>
        <ul className="play-queue-row">
          <li>
            <i className="fa fa-list small" onClick={ e => this.props.router.push("/queue") }></i>
          </li>
          <li>
            <i className="fa fa-random small"></i>
          </li>
          <li>
            <i className="fa fa-retweet small"></i>
          </li>
          <li>
            <i className="fa fa-volume-up small"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Controls);
