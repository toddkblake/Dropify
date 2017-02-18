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
    if (this.props.session.currentUser === null) return (<div></div>);
    return (
      <div className="navbar">
        <img className="round-logo-white" src={window.images.roundLogoWhite}/>
        <ul>
          <li>
            <Link to="#">
              <i className="fa fa-search"></i>
              <p>Search</p>
            </Link>
          </li>
          <li className="active">
            <Link to="#">
              <i className="fa fa-clone"></i>
              <p>Browse</p>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-music"></i>
              <p>Your Music</p>
            </Link>
          </li>
          <li>
            <Link to="#">
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
          <button className="small" onClick={ this.handleClick }>Logout</button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
