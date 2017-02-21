import React from 'react';
import { Link } from 'react-router';
import { duration } from '../../util/music_util';
import ContextMenu from '../menus/context_menu';

class Song extends React.Component {
  constructor (props) {
    super(props);
  }

  handleClick (song, action) {
    return (e) => {
      e.preventDefault();
      if (action === "play") {
        this.props.setCurrentSong(song);
        this.props.playCurrentSong();
      } else if (action === "queue") {
        this.props.addSongToQueue(song);
      }
    }
  }

  handleDoubleClick (song) {
    return (e) => {
      e.preventDefault();
      this.props.setCurrentSong(song);
      this.props.playCurrentSong();
    };
  }

  handleContextMenu (e) {
    e.preventDefault();
  }

  render () {
    const { song } = this.props;
    return (
      <tr onDoubleClick={ this.handleDoubleClick(song).bind(this) } className="song-row" >
        <td><i className="fa fa-play-circle-o tooltip" onClick={ this.handleClick(song, "play").bind(this) }><span className="tooltiptext">Play</span></i></td>
        <td><i className="fa fa-plus tooltip" onClick={ this.handleClick(song, "queue").bind(this) }><span className="tooltiptext">Add to Queue</span></i></td>
        <td><p>{ song.ord }</p></td>
        <td><div className="ellipsis"><p className="white">{ song.title }</p></div></td>
        <td><div className="ellipsis"><Link to={ `artists/${song.artist.id}` } className="white">{ song.artist.name }</Link></div></td>
        <td><div className="ellipsis"><Link to={ `artists/${song.artist.id}/albums/${song.album.id}` } className="white">{ song.album.title }</Link></div></td>
        <td><p>{ duration(song.duration) }</p></td>
        <td><i className="fa fa-ellipsis-h" onClick={ this.handleContextMenu.bind(this) }></i></td>
      </tr>
    );
  }
}

export default Song;
