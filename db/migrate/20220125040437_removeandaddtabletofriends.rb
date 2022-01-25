class Removeandaddtabletofriends < ActiveRecord::Migration[5.2]
  def change
    remove_column :friends, :accepted, :boolean 
    add_column :friends, :status, :integer
  end
end
