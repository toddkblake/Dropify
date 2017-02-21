import React from 'react';
import ContentCard from './content_card';

const Artists = ({ artists }) => {
  return (
    <div className="artists-container">
      {
        artists.map(artist => (
          <ContentCard
            key={ artist.id }
            cardType={ "artist" }
            image={ artist.profile_photo_large }
            primaryContent={ artist.name }
            primaryLink={ `/artists/${artist.id}` }
          />
        ))
      }
    </div>
  );
}

export default Artists;
