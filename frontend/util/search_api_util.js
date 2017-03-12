export const fetchSearchResults = (queryString) => {
  return $.ajax({
    method: 'GET',
    url: `/api/search?query=${queryString}`
  })
}
