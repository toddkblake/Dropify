# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### users
- `GET /api/users`
- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users/:id`

### session
- `POST /api/session`
- `DELETE /api/session`

### songs
- `GET /api/songs/:id/`

### albums
- `GET /api/albums/:id`

### artists
- `GET /api/artists/`
- `GET /api/artists/:id`

### playlists
- `GET /api/users/:id/playlists`
- `POST /api/playlists`
- `GET /api/playlists/:id`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists`

### playlist_songs
- `POST /api/playlist_songs`
- `PATCH /api/playlist_songs/:id`
- `DELETE /api/playlist_songs/:id`

### playlist_follows
- `POST /api/playlist_follows`
- `DELETE /api/playlist_follows/:id`
