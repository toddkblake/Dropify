```javascript

{
  session: {
    currentUser: {
      username: "toddkblake",
      firstName: "Todd",
      lastName: "Blake",
      session_token: "cf7e2f8dd0c453606a726e40662ead14d41cc8c"
    },
    errors: {}
  },

  loading: false,

  browse: {
    artists: {},
    artist: {},
    album: {
      id: 43,
      title: "On Time",
      artist_id: 5,
      album_cover_url: "http://example.com/example.jpg"
      songs: [
        1: {
          id: 73,
          title: "Take Five",
          duration: 323,
          artist: "Dave Brubeck",
          position: 61,
          media_url: "http://example.com/example.mp3",
          album_cover_url: "http://example.com/example.jpg"
        },
        2: {
          //...
        ]
      }
    },
  }

  playlists: {
    9: {
      id: 9
      name: "Jazz"
      owner_id: 3
      photo_small: "http://example.com/"
      photo_medium: "http://example.com/"
      photo_large: "http://example.com/"
      songs: [
        {
          id: 73,
          title: "Take Five",
          duration: 323,
          artist: "Dave Brubeck",
          position: 61,
          media_url: "http://example.com/example.mp3",
          album_cover_url: "http://example.com/example.jpg"
        },
        {
          id: 45
          //...
        }
    }
  },

  users: {
    3: {
      id: 3
      username:"appacademy"
      f_name: "Guest"
      l_name: "Account"
      profile_photo_large: "http://example.com/",
      profile_photo_medium: "http://example.com/",
      profile_photo_small: "http://example.com/",
      playlists: [ 3, 32, 45, 98],
      followedPlaylists: [ 3, 32, 45, 98]
    }
  },

  playQueue: {
    currentSong: {
      song: {
        id: 73,
        title: "Take Five",
        duration: 323,
        artist: "Dave Brubeck",
        position: 61,
        media_url: "http://example.com/example.mp3",
        album_cover_url: "http://example.com/example.jpg"
      },
      playing: true,
      restart: false
    },
    queuedSongs: {
      songs: {
        54: {
          id: 54,
          title: "Blue in Green",
          duration: 337,
          artist: "Miles Davis",
          position: 0,
          media_url: "http://example.com/example.mp3",
          album_cover_url: "http://example.com/example.jpg"
        },
        32: {
          //...
        },
        11: {
          //...
        }
      }
      order: [54, 32, 11],
      shuffled: false,
      repeat: true
    }
  }
}

```
