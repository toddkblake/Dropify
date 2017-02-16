class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.attachment :profile_photo, null: false
      t.attachment :header_photo, null: false
      t.timestamps null: false
    end
    add_index :artists, :name
  end
end
