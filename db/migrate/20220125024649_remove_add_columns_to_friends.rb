class RemoveAddColumnsToFriends < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :user1_id, :integer
    remove_column :friends, :user2_id, :integer
    add_column :friends, :user_id, :integer
    add_column :friends, :friend_id, :integer
    add_column :friends, :accepted, :boolean, default: false
  end
end
