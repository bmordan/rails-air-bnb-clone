# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

locations = ["Rome", "London", "Battersea", "Coombe Down"]

["Bob", "Amy", "Cat", "Rob"].each_with_index do |name, index|
    user = User.create({name: name, password: "123123"})
    user.image.attach(io: File.open("./db/images/av#{index + 1}.png"), filename: "av#{index + 1}.png", content_type: "image/png")
    user.properties.create({location: locations[index], price_per_night: 100})
    user.properties.first.image.attach(io: File.open("./db/images/house#{index + 1}.jpg"), filename: "house#{index + 1}.jpg", content_type: "image/jpeg")
end

bob = User.find_by({name: "Bob"})
property = Property.find_by({location: "London"})
booking_past = Booking.create({from: "2018-10-10", nights: 5, user_id: bob.id, property_id: property.id})
booking_future = Booking.create({from: "2020-10-10", nights: 3, user_id: bob.id, property_id: property.id})
review = Review.create({booking_id: booking_past.id, rating:4, comment: "Very nice", is_host:0})
review_host = Review.create({booking_id: booking_past.id, rating:3, comment: "Bit noisy", is_host:1})
