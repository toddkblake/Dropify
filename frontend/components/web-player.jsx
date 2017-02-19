import React from 'react';
import NavBar from './navbar/navbar_container';
import NowPlaying from './now_playing/now_playing_container';

const WebPlayer = ({ children }) => {
  return (
    <div className="web-player">
      <NavBar />
      <div id="main-content-container" className="now-playing-inactive">
        { children }
      </div>
      <NowPlaying />
    </div>
  );
};

export default WebPlayer;
