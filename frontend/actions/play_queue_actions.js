import * as PlayQueueAPIUtil from '../util/play_queue_util';

export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_CURRENT_SONG = "PLAY_CURRENT_SONG";
export const PAUSE_CURRENT_SONG = "PAUSE_CURRENT_SONG";
export const ADD_SONG = "ADD_SONG";

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


export const addSongToQueue = (song) => {
  return ({
    type: "ADD_SONG",
    song
  })
}
