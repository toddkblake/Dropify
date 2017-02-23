import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout (e) {
    this.props.clearPlayQueue();
    this.props.logout().then(() => {
      this.props.router.push("/")
    });
  }

  render () {
    const currentUser = this.props.session.currentUser;
    if (currentUser === null) return (<div></div>);
    return (
      <div className="navbar">
        <img className="round-logo-white" src={window.images.roundLogoWhite}/>
        <ul>
          <li>
            <Link>
              <i className="fa fa-search"></i>
              <p>Search</p>
            </Link>
          </li>
          <li>
            <Link to="/browse" activeClassName="active-col">
              <i className="fa fa-clone"></i>
              <p>Browse</p>
            </Link>
          </li>
          <li>
            <Link to={ `/users/${currentUser.id}/collection/` } activeClassName="active-col">
              <i className="fa fa-music"></i>
              <p>Your Music</p>
            </Link>
          </li>
          <li>
            <Link to="/follow" activeClassName="active-col">
              <i className="fa fa-users"></i>
              <p>Follow</p>
            </Link>
          </li>
        </ul>
        <div className="user">
          <Link to="#">
            <img className="user-profile-photo" src={ this.props.session.currentUser.profile_photo_small }/>
            <p>{ this.props.session.currentUser.f_name }</p>
          </Link>
          <button className="small" onClick={ this.handleLogout }>Logout</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
