class DropDMmembershipsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :dm_memberships
    
  end
end
