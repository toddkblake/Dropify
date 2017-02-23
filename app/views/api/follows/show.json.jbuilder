if @follow.followable_type == "User"
  json.partial! "api/follows/user_follow", follow: @follow
else
  json.partial! "api/follows/playlist_follow", follow: @follow
end
