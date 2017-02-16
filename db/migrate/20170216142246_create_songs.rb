class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :duration, null: false
      t.integer :album_id, null: false
      t.integer :ord, null: false
      t.attachment :audio, null: false
      t.timestamps null: false
    end
    add_index :songs, :title
    add_index :songs, :album_id
  end
end
