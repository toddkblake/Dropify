import React from 'react';
import { Link } from 'react-router';
import ProgressBar from './progress_bar';
import Controls from './controls_container';

class NowPlaying extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate () {
    if (this.props.currentSong.playing && this.audioEl) {
      this.audioEl.play();
    } else if (this.audioEl) {
      this.audioEl.pause();
    }
  }

  activateDisplay (mainContent) {
    mainContent.className = "now-playing-active";
  }

  render () {
    const currentSong = this.props.currentSong;
    if (!currentSong.song.id) {
      return (<div className="now-playing-container inactive"></div>);
    }
    const mainContent = document.getElementById('main-content-container');
    if (mainContent){
      this.activateDisplay(mainContent);
    }
    return (
      <div className="now-playing-container active">
        <div className="now-playing">
          <img src={ currentSong.song.album.album_cover_large }></img>
          <p className="white">{ currentSong.song.title }</p>
          <Link to={`/artists/${currentSong.song.artist.id}`}>{ currentSong.song.artist.name }</Link>
          <audio
            id="audio-element"
            src={ currentSong.song.audio }
            ref={ ref => this.audioEl = ref }
            onEnded={ e => this.props.nextSong() }
            autoPlay
          />
        </div>
        <ProgressBar currentSong={ currentSong } />
        <Controls currentSong={ currentSong } />
      </div>
    );
  }
}

export default NowPlaying;
