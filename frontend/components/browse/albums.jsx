import React from 'react';
import ContentCard from './content_card';

const Albums = ({ albums }) => {
  return (
    <div className="albums-container">
      <div className="section-header">
        <h5>Albums</h5>
      </div>
      {
        albums.map(album => (
          <ContentCard
            key={ album.id }
            cardType={ "album" }
            image={ album.album_cover_large }
            primaryContent={ album.title }
            primaryLink={ `/artists/${album.artist.id}/albums/${album.id}` }
            secondaryContent={ album.artist.name }
            secondaryLink={ `/artists/${album.artist.id}` }
          />
        ))
      }
    </div>
  );
}

export default Albums;
