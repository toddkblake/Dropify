# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  duration           :integer          not null
#  album_id           :integer          not null
#  ord                :integer          not null
#  audio_file_name    :string           not null
#  audio_content_type :string           not null
#  audio_file_size    :integer          not null
#  audio_updated_at   :datetime         not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Song < ActiveRecord::Base
end
