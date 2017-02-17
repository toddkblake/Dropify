import React from 'react';
import { Link } from 'react-router';
import Artists from './artists';

class Browse extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchArtists();
  }

  render () {
    const { artists } = this.props;
    return (
      <div className="browse-container">
        <div className="browse-header">
          <h1>Browse</h1>
          <nav className="browse-nav">
            <ul>
              <li className="active">
                <Link to="#" >
                  <h5>
                    Artists
                  </h5>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <h5>
                    Genres
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
