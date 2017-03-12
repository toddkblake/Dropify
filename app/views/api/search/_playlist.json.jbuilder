  json.extract! playlist, :id, :name
  json.owner playlist.owner.username
  json.owner_id playlist.owner.id
  json.photo_small playlist.photo(:small)
