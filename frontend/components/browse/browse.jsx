import React from 'react';
import { Link } from 'react-router';
import Artists from './artists';
import Spinner from '../loading/spinner';

class Browse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchArtists();
  }

  render () {
    const { artists } = this.props;
    if (artists.length === 0) return (<Spinner/>);
    return (
      <div className="browse-container">
        <div className="page-header">
          <h1>Browse</h1>
          <nav className="page-header-nav">
            <ul>
              <li>
                <Link to="/browse" activeClassName="active-row" >
                  <h5>
                    Artists
                  </h5>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Artists artists={ artists } />
      </div>
    );
  }
}

export default Browse;
