import React from 'react';
import { Link } from 'react-router';
import Songs from '../songs/songs';
import Spinner from '../loading/spinner';
import PlaylistMenu from '../menus/playlist_menu_container';
import PlaylistForm from './playlist_form_container';

class PlaylistDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      menuHidden: true,
      formHidden: true
    }
  }

  componentDidMount () {
    this.props.fetchPlaylist(this.props.params.userId, this.props.params.playlistId);
    this.props.fetchUser(this.props.params.userId);
  }

  unhideMenu () {
    this.setState({ menuHidden: false });
  }

  hideMenu () {
    this.setState({ menuHidden: true });
  }

  unhideForm () {
    this.setState({ formHidden: false });
  }

  hideForm () {
    this.setState({ formHidden: true });
  }

  render () {
    if (!this.props.playlist || !this.props.owner) return (<Spinner/>);
    const { playlist, owner } = this.props;
    return (
      <div className="playlist-container">
        <div className="playlist-header">
          <div className="playlist-header-info">
            <div className="playlist-photo">
              <img src={ playlist.photo_medium } />
              <div className="playlist-name">
                <h6>Playlist</h6>
                <h2>{ playlist.name }</h2>
              </div>
            </div>
            <ul className="button-row">
              <button className="medium green">Play</button>
              <button className="medium">Follow</button>
              <button className="round dropdown-anchor"><i className="fa fa-ellipsis-h"></i></button>
              <PlaylistMenu
                playlist={ playlist }
                hidden={ this.state.menuHidden }
                unhideForm={ this.unhideForm.bind(this) }
                hideMenu={ this.hideMenu.bind(this) }
              />
              <PlaylistForm
                formType="edit"
                hidden={ this.state.formHidden }
                playlist={ playlist }
                unhideForm={ this.unhideForm.bind(this) }
                hideForm={ this.hideForm.bind(this) }
              />
            </ul>
            <div className="playlist-info">
              <p>By <Link to={ `users/${playlist.owner_id}` } className="white">{ `${owner.f_name} ${owner.l_name}` }</Link> • { playlist.songs.length } songs</p>
            </div>
          </div>
        </div>
        <Songs songs={ playlist.songs } />
      </div>
    );
  }
}

export default PlaylistDetail;
