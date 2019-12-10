class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :booking_id
      t.integer :rating
      t.string :comment
      t.integer :is_host

      t.timestamps
    end
  end
end
