class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :from
      t.integer :nights
      t.integer :user_id
      t.integer :property_id

      t.timestamps
    end
  end
end
