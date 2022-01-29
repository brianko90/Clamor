class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.string :body, null: false 
      t.integer :channel_id, null: false 
      t.timestamps
    end
  end
end
