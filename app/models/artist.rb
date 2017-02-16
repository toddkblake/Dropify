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
end
