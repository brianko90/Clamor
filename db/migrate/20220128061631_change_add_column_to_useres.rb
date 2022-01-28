class ChangeAddColumnToUseres < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :tag, :string
  end
end
