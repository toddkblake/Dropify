import React from 'react';
import { Link } from 'react-router';
import Albums from './albums';

class ArtistDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchArtist(this.props.artistId);
  }

  componentWillUnmount () {
    this.props.clearArtist();
  }

  render () {
    const { artist } = this.props;
    if (!artist.albums) return (<div>loading...</div>);
    const albums = artist.albums;
    return (
      <div className="artist-container">
        <div className="artist-header">
          <div className="artist-header-img">
            <img src={ artist.header_photo } />
          </div>
          <div className="artist-header-info">
            <div className="artist-profile-photo">
              <img src={ artist.profile_photo_medium } />
              <div className="artist-name">
                <h6>Artist</h6>
                <h2>{ artist.name }</h2>
              </div>
            </div>
            <ul className="button-row">
              <button className="medium green">Play</button>
              <button className="medium">Follow</button>
            </ul>
          </div>
        </div>
        <Albums albums={ albums } />
      </div>
    );
  }
}

export default ArtistDetail;
