# Schema Information

## users

|column name       |data type|details                  |
|------------------|---------|-------------------------|
|id                |integer  |not null, primary key    |
|username          |string   |not null, indexed, unique|
|email             |string   |not null, indexed, unique|
|f_name            |string   |not null, indexed        |
|l_name            |string   |not null, indexed        |
|password_digest   |string   |not null                 |
|session_token     |string   |not null, indexed, unique|
|profile_photo_url |string   |not null                 |

## songs

|column name    |data type|details                                           |
|---------------|---------|--------------------------------------------------|
|id             |integer  |not null, primary key                             |
|title          |string   |not null, indexed                                 |
|duration       |integer  |not null                                          |
|album_id       |integer  |not null, foreign key (references albums), indexed|
|ord            |integer  |not null (references albums)                      |
|src_url        |string   |not null                                          |

## albums

|column name     |data type|details                                            |
|----------------|---------|---------------------------------------------------|
|id              |integer  |not null, primary key                              |
|title           |string   |not null, primary key                              |
|artist_id       |integer  |not null, foreign key (references artists), indexed|
|album_cover_url |string   |not null                                           |

## artists

|column name       |data type  |details              |
|------------------|-----------|---------------------|
|id                |integer    |not null, primary key|
|name              |string     |not null, indexed    |
|profile_photo_url |string     |not null             |
|header_photo_url  |string     |not null             |

## playlists

|column name|data type|details                                           |
|-----------|---------|--------------------------------------------------|
|id         |integer  |not null, primary key                             |
|name       |string   |not null, indexed                                 |
|owner_id   |integer  |not null, foreign key (references users), indexed |

## playlist_songs

|column name|data type|details                                               |
|-----------|---------|------------------------------------------------------|
|id         |integer  |not null, primary key                                 |
|playlist_id|integer  |not null, foreign key (references playlists), indexed |
|song_id    |integer  |not null, foreign key (references songs), indexed     |
|ord        |integer  |not null                                              |

### follows

|column name     |data type|details                                                |
|----------------|---------|-------------------------------------------------------|
|id              |integer  |not null, primary key                                  |
|follower_id     |integer  |not null, foreign key (references users), indexed      |
|followable_id   |integer  |not null, polymorphic (references followable), indexed |
|followable_type |string   |not null                                               |

## BONUS

### genres

|column name  |data type|details                                              |
|-------------|---------|-----------------------------------------------------|
|id           |integer  |not null, primary key                                |
|name         |string   |not null, indexed                                    |

### artist_genres

|column name  |data type|details                                             |
|-------------|---------|----------------------------------------------------|
|id           |integer  |not null, primary key                               |
|artist_id    |integer  |not null, foreign key (references artists), indexed |
|genre_id     |integer  |not null, foreign key (references genres), indexed  |

### playlist_genres

|column name  |data type|details                                               |
|-------------|---------|------------------------------------------------------|
|id           |integer  |not null, primary key                                 |
|playlist_id  |integer  |not null, foreign key (references playlists), indexed |
|genre_id     |integer  |not null, foreign key (references genres), indexed    |

### user_songs

|column name  |data type|details                                           |
|-------------|---------|--------------------------------------------------|
|id           |integer  |not null, primary key                             |
|user_id      |integer  |not null, foreign key (references users), indexed |
|song_id      |integer  |not null, foreign key (references songs), indexed |

### sessions

|column name     |data type|details               |
|----------------|---------|----------------------|
|id              |integer  |not null, primary key |
|user_id         |string   |not null, indexed     |
|http_user_agent |string   |not null              |
