json.follower do
  json.partial! 'api/users/user', user: follow.follower
end
json.followee do
  json.partial! 'api/users/user', user: follow.followable
end
