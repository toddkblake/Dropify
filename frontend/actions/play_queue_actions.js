import * as PlayQueueAPIUtil from '../util/play_queue_api_util';

export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const LAST_SONG = "LAST_SONG";
export const ADD_SONG = "ADD_SONG";
export const ADD_SONGS = "ADD_SONGS";
export const SHUFFLE = "SHUFFLE";
export const UNSHUFFLE = "UNSHUFFLE";
export const REPEAT = "REPEAT";
export const CLEAR_REPEAT = "CLEAR_REPEAT";
export const CLEAR_PLAY_QUEUE = "CLEAR_PLAY_QUEUE";
export const RESET_PLAY_QUEUE = "RESET_PLAY_QUEUE";

export const playSong = (song, songs) => dispatch => {
  dispatch(clearPlayQueue());
  dispatch(addSongsToQueue(songs));
  dispatch(setCurrentSong(song));
  dispatch(playCurrentSong());
}

export const playAlbum = album => dispatch => {
  dispatch(clearPlayQueue());
  dispatch(addSongsToQueue(album.songs));
  dispatch(setCurrentSong(album.songs[0]));
  dispatch(playCurrentSong());
}

export const playPlaylist = playlist => dispatch => {
  dispatch(clearPlayQueue());
  dispatch(addSongsToQueue(playlist.songs));
  dispatch(setCurrentSong(playlist.songs[0]));
  dispatch(playCurrentSong());
}

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  song
})

export const playCurrentSong = () => ({
  type: PLAY_CURRENT_SONG
})

export const pauseCurrentSong = () => ({
  type: PAUSE_CURRENT_SONG
})

export const nextSong = () => ({
  type: NEXT_SONG
})

export const lastSong = () => ({
  type: LAST_SONG
})

export const addSongToQueue = (song) => ({
  type: ADD_SONG,
  song
})

export const addSongsToQueue = (songs) => ({
  type: ADD_SONGS,
  songs
})

export const shuffle = () => ({
  type: SHUFFLE
})

export const unshuffle = () => ({
  type: UNSHUFFLE
})

export const repeat = () => ({
  type: REPEAT
})

export const clearRepeat = () => ({
  type: CLEAR_REPEAT
})

export const clearPlayQueue = playlist => ({
  type: CLEAR_PLAY_QUEUE
})

export const resetPlayQueue = playlist => ({
  type: RESET_PLAY_QUEUE
})
