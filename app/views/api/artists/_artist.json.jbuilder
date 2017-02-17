json.extract! artist, :id, :name
json.profile_photo artist.profile_photo
json.profile_photo_large artist.profile_photo(:large)
json.profile_photo_medium artist.profile_photo(:medium)
json.profile_photo_small artist.profile_photo(:small)
json.header_photo artist.header_photo
