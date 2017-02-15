User.delete_all

User.create!(
  username: 'toddkblake',
  password: 'password',
  email: 'todd.k.blake@gmail.com',
  f_name: 'Todd',
  l_name: 'Blake'
)

User.create!(
  username: 'appacademy',
  password: 'fullstack',
  email: 'admin@appacademy.io',
  f_name: 'Guest',
  l_name: 'Account'
)
