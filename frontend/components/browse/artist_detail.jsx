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

  componentWillReceiveProps () {

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
          <h1>{ artist.name }</h1>
          <h5>Albums</h5>
        </div>
        <Albums albums={ albums } />
      </div>
    );
  }
}

export default ArtistDetail;
