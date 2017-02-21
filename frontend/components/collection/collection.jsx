import React from 'react';
import { Link } from 'react-router';
import Playlists from '../playlists/playlists';
import { selectUserPlaylists } from '../../selectors/playlist_selectors';
import NewPlaylistForm from '../playlists/new_playlist_form';
import Spinner from '../loading/spinner';

class Collection extends React.Component {

  componentDidMount () {
    this.props.fetchUser(this.props.params.userId);
    this.props.fetchUserPlaylists(this.props.params.userId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.user) {
      if (nextProps.user.playlists != this.props.user.playlists) {
        this.props.fetchUserPlaylists(this.props.params.userId);
      }
    }
  }

  render () {
    let playlists;
    if (!this.props.user || !this.props.user.playlists || !this.props.playlists[this.props.user.playlists[0]] ) {
      return (<Spinner/>);
    }

    this.userPlaylists = selectUserPlaylists(this.props.playlists, this.props.user.playlists);

    return (
      <div className="collection-container">
        <div className="page-header">
          <h1>Your Music</h1>
          <nav className="page-header-nav">
            <ul>
              <li className="active">
                <Link to={ `/users/${currentUser.id}/collection/` } >
                  <h5>
                    Playlists
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <h5>
                    Songs
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <h5>
                    Albums
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <h5>
                    Artists
                  </h5>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Playlists
          playlists={ this.userPlaylists }
          name="Your Playlists"
          className="user-playlists"
          form={ <NewPlaylistForm /> }
        />
      </div>
    );
  }
}

export default Collection;
