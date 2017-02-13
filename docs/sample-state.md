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

  content: {
    artists: {},
    artist: {
      id: 5,
      name: "Dave Brubeck",
      profile_photo_url: "http://example.com/example.jpg",
      header_photo_url: "http://example.com/example.jpg",
      albums: {
        1: {
          id: 43,
          title: "On Time",
          artist_id: 5,
          album_cover_url: "http://example.com/example.jpg"
        },
        2: {
          id: 44,
          title: "The Very Best of Dave Brubeck",
          artist_id: 5,
          album_cover_url: "http://example.com/example.jpg"
        }
      }
    },
    album: {
      id: 43,
      title: "On Time",
      artist_id: 5,
      album_cover_url: "http://example.com/example.jpg"
      songs: {
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
        }
      }
    }
    playlists: {},
    playlist: {},
    users: {},
    user: {}
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