class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.integer :user_id, null: false
      t.integer :happiness, null: false
      t.date :date, null: false
      t.timestamps
    end
  end
end
