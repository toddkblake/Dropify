class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false
      t.attachment :album_cover, null: false
      t.timestamps null: false
    end
    add_index :albums, :title
    add_index :albums, :artist_id
  end
end
