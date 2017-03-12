import React from 'react';
import SearchResult from './search_result';
import { withRouter } from 'react-router';

const SearchResultsSection = ({ results, label, type }) => {
  debugger
  return (
    <div className={`search-results-section ${type.toLowerCase()}s`}>
      <h5>{ label }</h5>
      <ul>
        {
          results.map((result, idx) => {
            debugger
            let primaryContent;
            let secondaryContent;
            let clickHandler;
            let imageUrl;
            switch(type) {
              case 'Song': {
                primaryContent = result.title;
                secondaryContent = result.artist_name;
                clickHandler = () => {
                  this.props.router.push(`/artist/${result.artist_id}/album/${result.album_id}`);
                }
                imageUrl = null;
                break;
              }
              case 'Artist': {
                primaryContent = result.name;
                secondaryContent = null;
                clickHandler = () => {
                  this.props.router.push(`/artist/${result.id}`);
                }
                imageUrl = result.profile_photo_small;
                break;
              }
              case 'Album': {
                primaryContent = result.title;
                secondaryContent = result.artist_name;
                clickHandler = () => {
                  this.props.router.push(`/artist/${result.artist_id}/album/${result.id}`);
                }
                imageUrl = result.album_cover_small;
                break;
              }
              case 'Playlist': {
                primaryContent = result.name;
                secondaryContent = result.owner;
                clickHandler = () => {
                  this.props.router.push(`/users/${result.owner_id}/playlists/${result.id}`);
                }
                imageUrl = result.photo_small;
                break;
              }
              case 'User': {
                primaryContent = `${result.f_name} ${result.l_name}`;
                secondaryContent = result.username;
                clickHandler = () => {
                  this.props.router.push(`/users/${result.id}`);
                }
                imageUrl = result.profile_photo_small;
                break;
              }
            }

            return (
              <SearchResult
                key={`${type.toLowerCase()}-${idx}`}
                primaryContent={ primaryContent }
                secondaryContent={ secondaryContent }
                clickHandler={ clickHandler }
                imageUrl={ imageUrl }
              />
            );
          })
        }
      </ul>
    </div>
  )
}

export default withRouter(SearchResultsSection);
