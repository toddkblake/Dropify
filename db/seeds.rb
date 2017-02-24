require 'csv'
require 'mp3info'
require 'open-uri'

puts "Users...\n"

todd = User.find_by(username: 'toddkblake')
unless todd
  todd = User.create!(
    username: 'toddkblake',
    password_digest: "$2a$10$HWToYC7gN8V18oC9sWeoy.BT3j8hUmjaahPgjz7MdwaUxM8ovdAMK",
    email: 'todd.k.blake@gmail.com',
    f_name: 'Todd',
    l_name: 'Blake'
  )

  todd.profile_photo = File.open("app/assets/images/todd-blake.jpg")
  todd.save!
end

guest = User.find_by(username: 'appacademy')
unless guest
  guest = User.create!(
    username: 'appacademy',
    password_digest: "$2a$10$p7DXLbK74Nz6nvKL33Nv9uKVkT17pAIM3LuGsmwJUhZlgMz8xnWuS",
    email: 'admin@appacademy.io',
    f_name: 'Guest',
    l_name: 'Account',
  )

  guest.profile_photo = File.open("app/assets/images/app-academy.jpg")
  guest.save!
end

jeff = User.find_by(username: 'jeffwu')
unless jeff
  jeff = User.create!(
    username: 'jeffwu',
    password_digest: "$2a$10$aJEpelj6kZ3Nj75fX12T.udoXrltGj1Zh/eD9VID7ocX5z0exZ2Iy",
    email: 'jeff@wu.com',
    f_name: 'Jeff',
    l_name: 'Wu',
  )

  jeff.profile_photo = File.open("app/assets/images/jeff-wu.jpg")
  jeff.save!
end
# 
# puts "Songs...\n"
#
# songs = CSV.read("db/seeds/songs.csv")
#
# songs.each_with_index do |song_row, i|
#
#   puts "Song #{i + 1}..."
#
#   song_file_path = song_row[0]
#   song = open(song_file_path)
#   song_info = Mp3Info.new(song)
#
#   artist = Artist.find_by(name: song_info.tag.artist)
#   unless artist
#     artist = Artist.create!(
#       name: song_info.tag.artist
#     )
#   end
#
#   album = Album.find_by(title: song_info.tag.album)
#   unless album
#     album = Album.create!(
#     title: song_info.tag.album,
#     year: song_info.tag.year,
#     artist_id: artist.id
#     )
#   end
#
#   song = Song.find_by(title: song_info.tag.title)
#   unless song
#     song = Song.create!(
#       title: song_info.tag.title,
#       duration: song_info.length.to_i,
#       album_id: album.id,
#       ord: song_info.tag.tracknum,
#       audio: song_file_path
#     )
#   end
#
# end

puts "Album Art..."

albums = CSV.read("db/seeds/album_art.csv")

albums.each_with_index do |album_row, i|

  puts "Album #{i + 1}..."

  album_title = album_row[0]
  album_cover_path = album_row[1]

  album = Album.find_by(title: album_title)
  if album
    album.update!(
    album_cover: album_cover_path
    )
  end

end

puts "Artist Photos..."

artists = CSV.read("db/seeds/artist_photos.csv")

artists.each_with_index do |artist_row, i|

  puts "Artist #{i + 1}..."

  artist_name = artist_row[0]
  profile_photo_path = artist_row[1]
  header_photo_path = artist_row[2]

  artist = Artist.find_by(name: artist_name)
  if artist
    artist.update!(
    profile_photo: profile_photo_path,
    header_photo: header_photo_path
    )
  end

end
