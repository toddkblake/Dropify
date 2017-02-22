import React from 'react';
import { Link } from 'react-router';
import Playlists from '../playlists/playlists';
import { selectUserPlaylists } from '../../selectors/playlist_selectors';
import PlaylistForm from '../playlists/playlist_form_container';
import Spinner from '../loading/spinner';
import Empty from '../loading/empty';

class Collection extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formHidden: true
    }
  }

  componentDidMount () {
    this.props.fetchUser(this.props.params.userId);
    this.props.fetchUserPlaylists(this.props.params.userId);
  }

  revealForm () {
    this.setState({ formHidden: false });
  }

  hideForm () {
    this.setState({ formHidden: true });
  }

  render () {
    if (!this.props.user) return (<Spinner/>);
    this.userPlaylists = selectUserPlaylists(this.props.playlists, this.props.user.playlist_ids);
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
        <ul className="button-row">
          <button className="medium green" onClick={ this.revealForm.bind(this) }>Add Playlist</button>
        </ul>

        <Playlists
          playlists={ this.userPlaylists }
          name="Your Playlists"
          className="user-playlists"
          form={ <PlaylistForm formType="new" hidden={ this.state.formHidden } hideForm= { this.hideForm.bind(this) } /> }
        />
      </div>
    );
  }
}

export default Collection;
