class User < ApplicationRecord
    has_secure_password
    has_one_attached :image
    has_many :properties
    has_many :bookings
end
