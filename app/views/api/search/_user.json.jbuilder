json.extract! user, :id, :f_name, :l_name, :username
json.profile_photo_small user.profile_photo(:small)
