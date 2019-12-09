class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.string :location
      t.integer :price_per_night
      t.integer :user_id

      t.timestamps
    end
  end
end
