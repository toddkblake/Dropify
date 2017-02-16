require 'csv'
require 'open-uri'
require 'open_uri_redirections'

unless User.find_by(username: "toddkblake")
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

unless User.find_by(username: 'appacademy')
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

artists = CSV.read("db/seeds/artists.csv")
artists.shift

artists.each do |artist_row|
  name = artist_row[0]
  profile_photo = artist_row[1]
  header_photo = artist_row[2]

  unless Artist.find_by(name: name)
    artist = Artist.new(name: name)

    profile_photo = open(profile_photo)
    artist.profile_photo = profile_photo

    header_photo = open(header_photo)
    artist.header_photo = header_photo

    artist.save!
  end
end

albums = CSV.read("db/seeds/albums.csv")
albums.shift

albums.each do |album_row|
  title = album_row[0]
  artist = album_row[1]
  album_cover = album_row[2]

  artist = Artist.find_by(name: artist)

  unless Album.find_by(title: title, artist: artist)
    album = Album.new(title: title, artist: artist)

    album_cover = open(album_cover)
    album.album_cover = album_cover

    album.save!
  end
end

songs = CSV.read("db/seeds/songs.csv")
songs.shift

songs.each do |song_row|
  title = song_row[0]
  album_title = song_row[1]
  audio = song_row[2]
  duration = song_row[3]
  ord = song_row[4]

  unless Song.find_by(title: title, duration: duration, ord: ord)
    song = Song.new(title: title, duration: duration, ord: ord)

    album = Album.find_by(title: album_title)
    song.album = album

    audio = open(audio)
    song.audio = audio

    song.save!
  end
end
