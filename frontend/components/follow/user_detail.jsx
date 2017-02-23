import React from 'react';
import { Link } from 'react-router';
import User from './user_container';
import Playlists from '../playlists/playlists';
import { selectUserPlaylists } from '../../selectors/playlist_selectors';
import Spinner from '../loading/spinner';

class UserDetail extends React.Component {

  componentDidMount () {
    this.props.fetchUser(this.props.currentUser.id).then(
      this.props.fetchUser(this.props.params.userId)
    );
    this.props.fetchUserPlaylists(this.props.params.userId);
  }

  render () {
    if (!this.props.user || !this.props.currentUser) return (<Spinner/>);
    this.userPlaylists = selectUserPlaylists(this.props.playlists, this.props.user.playlist_ids);
    return (
      <div className="user-detail-container">
        <div className="user-detail-header">
          <User user={ this.props.user } />
        </div>
        <Playlists
          playlists={ this.userPlaylists }
          name="Playlists"
          className="user-playlists"
        />
      </div>
    );
  }
}

export default UserDetail;
