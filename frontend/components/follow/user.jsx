import React from 'react';
import { Link, withRouter } from 'react-router';
import Spinner from '../loading/spinner';

class User extends React.Component {

  toggleFollow (e) {
    e.stopPropagation();
    if (this.props.currentUser.followed_user_ids.includes(this.props.user.id)) {
      this.props.unfollowUser(this.props.currentUser, this.props.user)
    } else {
      this.props.followUser(this.props.currentUser, this.props.user)
    }
  }

  handleClick (e) {
    this.props.router.push(`/users/${this.props.user.id}`)
  }

  render () {
    const { user } = this.props;
    const buttonText = (this.props.currentUser.followed_user_ids.includes(this.props.user.id)) ? "Unfollow" : "Follow";
    return (
      <div className="user-row" >
        <div className="user-header">
          <img src={ user.profile_photo_medium } className="user-profile-photo-medium" onClick={ this.handleClick.bind(this) } />
          <div className="user-info">
            <h4 onClick={ this.handleClick.bind(this) }>{ `${user.f_name} ${user.l_name}` }</h4>
            <h6>{ `${user.follower_ids.length} followers` }</h6>
          </div>
        </div>
        <div className="user-follow">
          <button onClick={ this.toggleFollow.bind(this) } className="medium">
            { buttonText }
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(User);
