User.delete_all

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
