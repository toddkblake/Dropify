import React from 'react';
import { Link } from 'react-router';
import { duration } from '../../util/music_util';
import SongMenu from '../menus/song_menu_container';

class Song extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menuHidden: true
    }
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

  handleModal (e) {
    this.props.openModal(`song-menu-${ this.props.uniqueId }`);
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
        <td>
          <div className="dropdown-anchor">
            <i
              className="fa fa-ellipsis-h"
              onClick={ this.handleModal.bind(this) }>
            </i>
            <SongMenu
              song={ song }
              hidden={ this.state.menuHidden }
              userPlaylists={ this.props.userPlaylists }
              uniqueId={ this.props.uniqueId }
            />
          </div>
        </td>
        <td><p>{ duration(song.duration) }</p></td>
      </tr>
    );
  }
}

export default Song;
