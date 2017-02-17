import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push("/"));
  }

  render () {
    return (
      <div className="navbar">
        <img className="round-logo-white" src={window.images.roundLogoWhite}/>
        <ul>
          <li>
            <Link to="#">
              <i className="fa fa-search fa-2x"></i>
              <h6>Search</h6>
            </Link>
          </li>
          <li className="active">
            <Link to="#">
              <i className="fa fa-clone fa-2x"></i>
              <h6>Browse</h6>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-music fa-2x"></i>
              <h6>Your Music</h6>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-users fa-2x"></i>
              <h6>Follow</h6>
            </Link>
          </li>
        </ul>
        <div className="user">
          <img className="user-profile-photo" src={ this.props.session.currentUser.profilePhoto }/>
          <button onClick={ this.handleClick }>Logout</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
