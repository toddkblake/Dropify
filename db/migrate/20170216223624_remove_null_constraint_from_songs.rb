class RemoveNullConstraintFromSongs < ActiveRecord::Migration
  def change
    remove_attachment :songs, :audio
    add_attachment :songs, :audio
  end
end
