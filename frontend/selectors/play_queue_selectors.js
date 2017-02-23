export const allQueuedSongs = (queuedSongs, playQueue) => {
  let songOrder = [];

  if (playQueue.shuffled) {
    queuedSongs.shuffledOrder.forEach(songId => {
      songOrder.push(queuedSongs.songs[songId]);
    });
  } else {
    debugger
    queuedSongs.order.forEach(songId => {
      songOrder.push(queuedSongs.songs[songId]);
    });
  }

  return songOrder;
}
