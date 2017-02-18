import React from 'react';
import { Link } from 'react-router';

class Song extends React.Component {
  render () {
    const { song } = this.props;
    return (
      <tr>
        <td><i className="fa fa-play-circle-o"></i></td>
        <td><i className="fa fa-plus"></i></td>
        <td><p>{ song.ord }</p></td>
        <td><p className="white">{ song.title }</p></td>
        <td><Link to={ `artists/${song.artist.id}` } className="white">{ song.artist.name }</Link></td>
        <td><Link to={ `artists/${song.artist.id}/albums/${song.album.id}` } className="white">{ song.album.title }</Link></td>
        <td><p>{ song.duration }</p></td>
        <td><i className="fa fa-ellipsis-h"></i></td>
      </tr>
    );
  }
}

export default Song;
