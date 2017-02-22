json.extract! user, :id, :username, :f_name, :l_name
json.profile_photo_large user.profile_photo(:large)
json.profile_photo_medium user.profile_photo(:medium)
json.profile_photo_small user.profile_photo(:small)
json.playlist_ids user.playlists.pluck(:id)
