import * as PlayQueueAPIUtil from '../util/play_queue_api_util';

export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const ADD_SONG = "ADD_SONG";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const PLAY_ALBUM = "PLAY_ALBUM";
export const PLAY_PLAYLIST = "PLAY_PLAYLIST";
export const SHUFFLE = "SHUFFLE";
export const UNSHUFFLE = "UNSHUFFLE";
export const REPEAT = "REPEAT";
export const CLEAR_REPEAT = "CLEAR_REPEAT";
export const CLEAR_PLAY_QUEUE = "CLEAR_PLAY_QUEUE";

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

export const addSongToQueue = (song) => ({
  type: ADD_SONG,
  song
})

export const addPlaylistToQueue = playlist => ({
  type: ADD_PLAYLIST,
  playlist
})

export const playAlbum = album => ({
  type: PLAY_ALBUM,
  album
})

export const playPlaylist = playlist => ({
  type: PLAY_PLAYLIST,
  playlist
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
