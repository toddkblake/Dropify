import React from 'react';
import Song from './song_container';

class Songs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userPlaylists: []
    }
  }
  componentDidMount () {
    this.populateUserPlaylists();
  }

  populateUserPlaylists() {
    this.props.fetchUserPlaylists(this.props.currentUser.id).then(
      userPlaylists => {
        this.setState({ userPlaylists: Object.values(userPlaylists.playlists) });
      }
    );
  }

  render () {
    const { songs, type } = this.props;
    return (
      <div className="songs-container">
        <table className="songs-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th><h5>#</h5></th>
              <th><h5>Song</h5></th>
              <th><h5>Artist</h5></th>
              <th><h5>Album</h5></th>
              <th></th>
              <th><i className="fa fa-clock-o"></i></th>
            </tr>
          </thead>
          <tbody>
            {
              songs.map((song, i, songs) => {
                let ord = (type === 'playlist') ? i + 1 : song.ord;
                return (
                  <Song
                    key={ i }
                    song={ song }
                    ord={ ord }
                    userPlaylists={ this.state.userPlaylists }
                    uniqueId={ i + songs.length }
                  />
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Songs;
