  json.extract! playlist, :id, :name
  json.owner playlist.owner.username
  json.photo_small playlist.photo(:small)
