class AddYearToAlbum < ActiveRecord::Migration
  def change
    add_column :albums, :year, :integer
  end
end
