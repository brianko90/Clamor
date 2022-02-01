class AddCOlumntoconversations < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :owner_id, :integer, null: false
  end
end
