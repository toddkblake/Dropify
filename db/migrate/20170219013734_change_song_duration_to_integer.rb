class ChangeSongDurationToInteger < ActiveRecord::Migration
  def change
    change_column :songs, :duration, 'integer USING CAST(duration AS integer)'
  end
end
