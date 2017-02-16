class RemoveNullConstraintfromUsersProfilePhoto < ActiveRecord::Migration
  def change
    remove_attachment :users, :profile_photo
    add_attachment :users, :profile_photo
  end
end
