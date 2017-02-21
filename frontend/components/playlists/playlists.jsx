import React from 'react';
import ContentCard from '../browse/content_card';

const Playlists = ({ playlists, name, className, form }) => {
  return (
    <div className="playlists-container">
      <div className="playlists-header">
        <h5>{ name }</h5>
      </div>
      <div className={ className }>
        { form }
        {
          playlists.map(playlist => (
            <ContentCard
              key={ playlist.id }
              cardType={ "playlist" }
              image={ playlist.playlist_photo_large }
              primaryContent={ playlist.name }
              primaryLink={ `/users/${playlist.owner_id}/playlists/${playlist.id}` }
              />
          ))
        }
      </div>
    </div>
  );
}

export default Playlists;
