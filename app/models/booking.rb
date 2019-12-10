class Booking < ApplicationRecord
    belongs_to :property
    belongs_to :user
    has_many :reviews
end
