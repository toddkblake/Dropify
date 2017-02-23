json.follower do
  json.partial! 'api/users/user', user: follow.follower
end
json.playlist do
  json.partial! 'api/playlists/playlist', playlist: follow.followable
end
