import React from 'react';
import Song from './song_container';

const Songs = ({ songs }) => {
  return (
    <div className="songs-container">
      <table className="songs-table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th><h5>#</h5></th>
            <th><h5>Song</h5></th>
            <th><h5>Artist</h5></th>
            <th><h5>Album</h5></th>
            <th><i className="fa fa-clock-o"></i></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            songs.map(song => <Song key={ song.id } song={ song } />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
