class RemoveNullConstraintFromArtistsPhotos < ActiveRecord::Migration
  def change
    remove_attachment :artists, :profile_photo
    remove_attachment :artists, :header_photo
    add_attachment :artists, :profile_photo
    add_attachment :artists, :header_photo
  end
end
