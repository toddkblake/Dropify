import React from 'react';
import { Link } from 'react-router';
import ProgressBar from './progress_bar';

class NowPlaying extends React.Component {
  constructor(props){
    super(props);
  }

  play () {
    this.audioEl.play();
    this.props.playCurrentSong();
  }

  pause () {
    this.audioEl.pause();
    this.props.pauseCurrentSong();
  }

  render () {
    const currentSong = this.props.playQueue.currentSong;
    if (!currentSong.song.album) {
      return (<div>loading...</div>);
    }
    let play_pause_button;
    if (currentSong.playing) {
      play_pause_button = <i className="fa fa-pause-circle-o large" onClick={ this.pause.bind(this) }></i>
    } else {
      play_pause_button = <i className="fa fa-play-circle-o large" onClick={ this.play.bind(this) }></i>
    }
    return (
      <div className="now-playing-container">
        <div className="now-playing">
          <img src={ currentSong.song.album.album_cover_large }></img>
        </div>
        <Link className="white" to="#">{ currentSong.song.title }</Link>
        <Link to={`/artists/${currentSong.song.artist.id}`}>{ currentSong.song.artist.name }</Link>
        <audio id="audio-element" src={ currentSong.song.audio } ref={ ref => this.audioEl = ref } autoPlay />
        <ProgressBar audioEl={ this.audioEl } currentSong={ currentSong } />
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
            <i className="fa fa-list small"></i>
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

export default NowPlaying;
