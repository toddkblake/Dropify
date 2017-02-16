# == Schema Information
#
# Table name: albums
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  artist_id                :integer          not null
#  album_cover_file_name    :string           not null
#  album_cover_content_type :string           not null
#  album_cover_file_size    :integer          not null
#  album_cover_updated_at   :datetime         not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#

class Album < ActiveRecord::Base
end
