class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.references :followable, polymorphic: true, index: true
      t.timestamps null: false
    end
    add_index :follows, [:follower_id, :followable_id], unique: true
  end
end
