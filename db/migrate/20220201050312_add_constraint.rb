class AddConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_column :direct_messages, :conversation_id, :integer
    add_column :direct_messages, :conversation_id, :integer, null: false
  end
end
