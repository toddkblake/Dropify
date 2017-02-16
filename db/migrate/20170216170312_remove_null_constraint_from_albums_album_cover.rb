class RemoveNullConstraintFromAlbumsAlbumCover < ActiveRecord::Migration
  def change
    remove_attachment :albums, :album_cover
    add_attachment :albums, :album_cover
  end
end
