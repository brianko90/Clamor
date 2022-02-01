class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.integer :user_id, null: false
      t.string :body, null: false
      t.integer :dm_id, null: false
      t.timestamps
    end
    add_index :direct_messages, :user_id
  end
end
