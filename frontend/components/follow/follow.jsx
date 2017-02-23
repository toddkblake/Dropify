import React from 'react';
import { Link } from 'react-router';
import User from './user_container';
import Spinner from '../loading/spinner';

class Follow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    const { users } = this.props;
    if (users.length === 0) return (<Spinner />);
    return (
      <div className="follow-container">
        <div className="follow-header">
          <h1>Follow</h1>
          <h5>
            Users
          </h5>
        </div>
        <div className="users">
          {
            users.map(user => {
              if (user.id === this.props.currentUser.id) return null;
              return (<User key={ user.id } user={ user } />);
            })
          }
        </div>
      </div>
    );
  }
}

export default Follow;
