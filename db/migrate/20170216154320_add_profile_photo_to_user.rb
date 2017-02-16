class AddProfilePhotoToUser < ActiveRecord::Migration
  def change
    add_attachment :users, :profile_photo, null: false
  end
end
