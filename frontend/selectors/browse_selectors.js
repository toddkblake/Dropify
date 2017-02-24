export const allArtists = (artists) => {
  let artistsArray = Object.values(artists);

  function compareArtistNames(a,b) {
    const aFirstWord = a.name.match(/([^The ]\w+)/)[0];
    const bFirstWord = b.name.match(/([^The ]\w+)/)[0];
    if (aFirstWord < bFirstWord)
      return -1;
    if (aFirstWord > bFirstWord)
      return 1;
    return 0;
  }

  return artistsArray.sort(compareArtistNames);
};
