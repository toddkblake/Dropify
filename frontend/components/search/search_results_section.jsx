import React from 'react';
import SearchResult from './search_result_container';

const SearchResultsSection = ({ results, label, type }) => {
  return (
    <div className={`search-results-section ${type.toLowerCase()}s`}>
      <h5>{ label }</h5>
      <ul>
        {
          results.map((result, idx) => {

            let primaryContent;
            let secondaryContent;
            let linkUrl;
            let imageUrl;

            switch(type) {
              case 'Song': {
                primaryContent = result.title;
                secondaryContent = result.artist_name;
                linkUrl = `/artists/${result.artist_id}/albums/${result.album_id}`;
                imageUrl = null;
                break;
              }
              case 'Artist': {
                primaryContent = result.name;
                secondaryContent = null;
                linkUrl = `/artists/${result.id}`;
                imageUrl = result.profile_photo_small;
                break;
              }
              case 'Album': {
                primaryContent = result.title;
                secondaryContent = result.artist_name;
                linkUrl = `/artists/${result.artist_id}/albums/${result.id}`;
                imageUrl = result.album_cover_small;
                break;
              }
              case 'Playlist': {
                primaryContent = result.name;
                secondaryContent = result.owner;
                linkUrl = `/users/${result.owner_id}/playlists/${result.id}`;
                imageUrl = result.photo_small;
                break;
              }
              case 'User': {
                primaryContent = `${result.f_name} ${result.l_name}`;
                secondaryContent = result.username;
                linkUrl = `/users/${result.id}`;
                imageUrl = result.profile_photo_small;
                break;
              }
            }

            return (
              <SearchResult
                key={`${type.toLowerCase()}-${idx}`}
                primaryContent={ primaryContent }
                secondaryContent={ secondaryContent }
                linkUrl={ linkUrl }
                imageUrl={ imageUrl }
              />
            );
          })
        }
      </ul>
    </div>
  )
}

export default SearchResultsSection;
