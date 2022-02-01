class CreateConversationMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :conversation_memberships do |t|
      t.integer :user_id, null: false
      t.integer :conversation_id, null: false 
      t.timestamps
    end
  end
end
