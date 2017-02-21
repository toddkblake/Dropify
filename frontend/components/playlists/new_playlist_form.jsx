import React from 'react';

class NewPlaylistForm extends React.Component {

  render () {
    return (
      <form className="new-playlist-form">
        <img src={ window.images.defaultPlaylistPhoto } />
        <input type="text" value="" placeholder="New Playlist" />
        <input type="submit" className="medium green" value="Create Playlist"/>
      </form>
    );
  }
}

export default NewPlaylistForm;
