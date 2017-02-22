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
- `GET /api/playlists`
- `GET /api/users/:id/playlists/:id`
- `POST /api/playlists`
- `PATCH /api/playlists/:id`
- `DELETE /api/playlists`

### playlist_songs
- `POST /api/playlist_songs`

### follows
- `POST /api/follows`
- `DELETE /api/follows/:id`
