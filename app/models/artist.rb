# == Schema Information
#
# Table name: artists
#
#  id                         :integer          not null, primary key
#  name                       :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#  header_photo_file_name     :string
#  header_photo_content_type  :string
#  header_photo_file_size     :integer
#  header_photo_updated_at    :datetime
#

class Artist < ActiveRecord::Base
  validates :name, presence: true

  has_many :albums
  has_many :songs,
    through: :album

  has_attached_file :profile_photo,
    styles: { small: "50x50", medium: "130x130", large: "210x210" },
    default_url: -> (a) { ActionController::Base.helpers.asset_path('default-profile-photo.jpg') }
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :header_photo,
    default_url: -> (a) { ActionController::Base.helpers.asset_path('default-header-photo.jpg') }
  validates_attachment_content_type :header_photo, content_type: /\Aimage\/.*\Z/

  include PgSearch
  multisearchable :against => [:name]
end
