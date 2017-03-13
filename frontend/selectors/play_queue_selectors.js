export const allQueuedSongs = (queuedSongs, playQueue) => {
  let songOrder = [];

  if (playQueue.shuffled) {
    queuedSongs.shuffledOrder.forEach(songId => {
      songOrder.push(queuedSongs.songs[songId]);
    });
  } else {
    queuedSongs.order.forEach(songId => {
      songOrder.push(queuedSongs.songs[songId]);
    });
  }

  return songOrder;
}

export const rotateOrder = (order, numRotations) => {
  numRotations = numRotations % order.length;
  if (numRotations < 0) {
    numRotations += order.length
  }
  return order.slice(numRotations).concat(order.slice(0, numRotations));
}

export const updateOrder = (order, songId) => {
  let idx = order.indexOf(songId);
  return order.slice(idx).concat(order.slice(0, idx));
}
