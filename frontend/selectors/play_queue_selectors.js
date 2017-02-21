export const allQueuedSongs = (queuedSongs) => {
  let result = [];
  queuedSongs.order.forEach(songId => {
    result.push(queuedSongs.songs[songId]);
  });
  return result;
}
