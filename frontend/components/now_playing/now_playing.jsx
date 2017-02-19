import React from 'react';

class NowPlaying extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div className="now-playing-container">
        <h1>NowPlaying</h1>
        <audio controls="controls">
          <source src="" type="audio/mpeg"/>
        </audio>
      </div>
    );
  }
}

export default NowPlaying;
