import React from 'react';
import { withRouter } from 'react-router';

class Empty extends React.Component {
  render () {
    const { heading, content, path, linkText } = this.props;
    return (
      <div className="empty-container">
        <div className="empty-content">
          <h2>{ heading }</h2>
          <p>{ content }</p>
          <button className="medium green" onClick={ e => this.props.router.push(path) }>{ linkText }</button>
        </div>
      </div>
    );
  }
}


export default withRouter(Empty);
