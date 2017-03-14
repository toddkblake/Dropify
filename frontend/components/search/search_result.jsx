import React from 'react';
import { withRouter } from 'react-router';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(linkUrl) {
    return (event) => {
      this.props.router.push(linkUrl);
      this.props.clearModal();
      this.props.clearSearchResults();
    }
  }

  render() {
    const { primaryContent, secondaryContent, linkUrl, imageUrl } = this.props;
      return (
        <li onClick={ this.handleClick(linkUrl) }>
          { imageUrl ? <img src={ imageUrl }/> : null }
          <div className="result-content">
            <p className="primary">
              { primaryContent }
            </p>
            { secondaryContent ? <p className="secondary">{ secondaryContent }</p> : null }
          </div>
        </li>
      );
  }
}

export default withRouter(SearchResult);
