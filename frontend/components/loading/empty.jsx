import React from 'react';
import { withRouter } from 'react-router';

class Empty extends React.Component {
  render () {
    const { heading, content, clickAction, buttonText } = this.props;
    return (
      <div className="empty-container">
        <div className="empty-content">
          <h2>{ heading }</h2>
          <p>{ content }</p>
          <button className="medium green" onClick={ clickAction }>{ buttonText }</button>
        </div>
      </div>
    );
  }
}


export default withRouter(Empty);
