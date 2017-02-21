import React from 'react';
import { Link } from 'react-router';
import Playlists from '../playlists/playlists';
import { selectUserPlaylists } from '../../selectors/playlist_selectors';
import NewPlaylistForm from '../playlists/new_playlist_form';
import Spinner from '../loading/spinner';
import Empty from '../loading/empty';

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
    if (!this.props.user) return (<Spinner/>);

    this.userPlaylists = selectUserPlaylists(this.props.playlists, this.props.user.playlists);

    return (
      <div className="collection-container">
        <div className="page-header">
          <h1>Your Music</h1>
          <nav className="page-header-nav">
            <ul>
              <li className="active">
                <Link to={ `/users/${this.props.user.id}/collection/` } >
                  <h5>
                    Playlists
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
