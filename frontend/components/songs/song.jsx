import React from 'react';
import { Link } from 'react-router';
import { duration } from '../../util/music_util';

class Song extends React.Component {
  constructor (props) {
    super(props);
  }

  handleDoubleClick (song) {
    return (e) => {
      e.preventDefault();
      this.props.setCurrentSong(song);
      this.props.playCurrentSong();
    };
  }

  render () {
    const { song } = this.props;
    return (
      <tr onDoubleClick={ this.handleDoubleClick(song).bind(this) } className="song-row" >
        <td><i className="fa fa-play-circle-o"></i></td>
        <td><i className="fa fa-plus"></i></td>
        <td><p>{ song.ord }</p></td>
        <td><div className="ellipsis"><p className="white">{ song.title }</p></div></td>
        <td><div className="ellipsis"><Link to={ `artists/${song.artist.id}` } className="white">{ song.artist.name }</Link></div></td>
        <td><div className="ellipsis"><Link to={ `artists/${song.artist.id}/albums/${song.album.id}` } className="white">{ song.album.title }</Link></div></td>
        <td><p>{ duration(song.duration) }</p></td>
        <td><i className="fa fa-ellipsis-h"></i></td>
      </tr>
    );
  }
}

export default Song;
