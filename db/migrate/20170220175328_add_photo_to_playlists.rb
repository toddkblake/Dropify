class AddPhotoToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :photo_file_name, :string
    add_column :playlists, :photo_content_type, :string
    add_column :playlists, :photo_file_size, :integer
    add_column :playlists, :photo_updated_at, :datetime
  end
end
