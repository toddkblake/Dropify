# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  owner_id           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
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

    has_attached_file :photo,
      styles: { small: "50x50", medium: "130x130", large: "210x210" },
      default_url: "images/default-playlist-photo.jpg"
    validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
