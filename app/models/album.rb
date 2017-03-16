# == Schema Information
#
# Table name: albums
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  artist_id                :integer          not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  album_cover_file_name    :string
#  album_cover_content_type :string
#  album_cover_file_size    :integer
#  album_cover_updated_at   :datetime
#  year                     :integer
#

class Album < ActiveRecord::Base
  validates :title, :artist_id, presence: true

  belongs_to :artist
  has_many :songs

  has_attached_file :album_cover,
    styles: { small: "50x50", medium: "130x130", large: "210x210" },
    default_url: -> (a) { ActionController::Base.helpers.asset_path('default-album-cover.jpg') }
  validates_attachment_content_type :album_cover, content_type: /\Aimage\/.*\Z/

  include PgSearch
  multisearchable :against => [:title]
end
