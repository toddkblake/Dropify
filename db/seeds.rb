require 'csv'
require 'mp3info'
require 'open-uri'

User.delete_all
Artist.delete_all
Album.delete_all
Song.delete_all

puts "Users...\n"

todd = User.create!(
  username: 'toddkblake',
  password_digest: "$2a$10$HWToYC7gN8V18oC9sWeoy.BT3j8hUmjaahPgjz7MdwaUxM8ovdAMK",
  email: 'todd.k.blake@gmail.com',
  f_name: 'Todd',
  l_name: 'Blake'
)

todd.profile_photo = File.open("app/assets/images/todd-blake.jpg")
todd.save!

guest = User.create!(
  username: 'appacademy',
  password_digest: "$2a$10$p7DXLbK74Nz6nvKL33Nv9uKVkT17pAIM3LuGsmwJUhZlgMz8xnWuS",
  email: 'admin@appacademy.io',
  f_name: 'Guest',
  l_name: 'Account',
)

guest.profile_photo = File.open("app/assets/images/app-academy.jpg")
guest.save!

puts "Songs...\n"

songs = CSV.read("db/seeds/songs.csv")

songs.each_with_index do |song_row, i|

  puts "Song #{i + 1}..."

  song_file_path = song_row[0]
  # song = open(song_file_path)
  song_info = Mp3Info.new(song_file_path)

  artist = Artist.find_by(name: song_info.tag.artist)
  unless artist
    artist = Artist.create!(
      name: song_info.tag.artist
    )
  end

  album = Album.find_by(title: song_info.tag.album)
  unless album
    album = Album.create!(
    title: song_info.tag.album,
    year: song_info.tag.year,
    artist_id: artist.id
    )
  end

  song = Song.new(
    title: song_info.tag.title,
    duration: song_info.length.to_i,
    album_id: album.id,
    ord: song_info.tag.tracknum
  )

  audio = File.open(song_file_path)

  song.audio = audio

  song.save!
end
