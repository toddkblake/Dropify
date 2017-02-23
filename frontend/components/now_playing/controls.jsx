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

  nextSong () {
    this.props.nextSong();
  }

  restart() {
    this.audioEl = document.getElementById('audio-element');
    this.audioEl.currentTime = 0;
  }

  queue () {
    this.props.router.push("/queue");
  }

  toggleShuffle () {
    if (this.props.playQueue.shuffled) {
      this.props.unshuffle();
      $('i.fa-random').removeClass('green');
    } else{
      this.props.shuffle();
      $('i.fa-random').addClass('green');
    }
  }

  toggleRepeat () {
    if (this.props.playQueue.repeat) {
      this.props.clearRepeat();
      $('i.fa-retweet').removeClass('green');
    } else{
      this.props.repeat();
      $('i.fa-retweet').addClass('green');
    }
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
            <i className="fa fa-step-backward medium" onClick={ this.restart.bind(this) }></i>
          </li>
          <li>
            { play_pause_button }
          </li>
          <li>
            <i className="fa fa-step-forward medium" onClick={ this.nextSong.bind(this) }></i>
          </li>
        </ul>
        <ul className="play-queue-row">
          <li>
            <i className="fa fa-list small" onClick={ this.queue.bind(this) }></i>
          </li>
          <li>
            <i className="fa fa-random small" onClick={ this.toggleShuffle.bind(this) }></i>
          </li>
          <li>
            <i className="fa fa-retweet small" onClick={ this.toggleRepeat.bind(this) }></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Controls);
