import React from 'react';
import SearchResultsSection from './search_results_section';

const SearchResults = ({ topResult, songs, artists, albums, playlists, users, error }) => (
  <div className="search-results">
    { topResult ? <SearchResultsSection results={ [topResult] } label="Top Result" type={ topResult.type } /> : null }
    { songs.length ? <SearchResultsSection results={ songs } label="Songs" type="Song" /> : null }
    { artists.length ? <SearchResultsSection results={ artists } label="Artists" type="Artist" /> : null }
    { albums.length ? <SearchResultsSection results={ albums } label="Albums" type="Album" /> : null }
    { playlists.length ? <SearchResultsSection results={ playlists } label="Playlists" type="Playlist" /> : null }
    { users.length ? <SearchResultsSection results={ users } label="Users" type="User" /> : null }
  </div>
);

export default SearchResults;
