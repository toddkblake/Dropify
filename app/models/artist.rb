# == Schema Information
#
# Table name: artists
#
#  id                         :integer          not null, primary key
#  name                       :string           not null
#  profile_photo_file_name    :string           not null
#  profile_photo_content_type :string           not null
#  profile_photo_file_size    :integer          not null
#  profile_photo_updated_at   :datetime         not null
#  header_photo_file_name     :string           not null
#  header_photo_content_type  :string           not null
#  header_photo_file_size     :integer          not null
#  header_photo_updated_at    :datetime         not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

class Artist < ActiveRecord::Base
  validates :name, presence: true
  validates :profile_photo, attachment_presence: true
  validates :header_photo, attachment_presence: true

  has_attached_file :profile_photo,
    styles: { small: "50x50", medium: "130x130", large: "210x210" },
    default_url: "/images/default-profile-photo.jpg"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :header_photo,
    default_url: "/images/default-header-photo.jpg"
  validates_attachment_content_type :header_photo, content_type: /\Aimage\/.*\Z/
end
