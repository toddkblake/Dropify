import React from 'react';
import { withRouter } from 'react-router';

class Browse extends React.Component {
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
      <div>
        <h1>Browse</h1>
        <button onClick={ this.handleClick }>Logout</button>
      </div>
    );
  }
}

export default withRouter(Browse);
