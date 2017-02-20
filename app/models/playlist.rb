# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :name, :owner, presence: true

  belongs_to :owner,
    class_name: 'User',
    foreign_key: :owner_id

  has_many :playlist_songs,
    class_name: 'PlaylistSong',
    foreign_key: :playlist_id

  has_many :songs,
    through: :playlist_songs,
    source: :song
end
