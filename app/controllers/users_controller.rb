require 'date'

class UsersController < ApplicationController
    def new
        render component: "UserCreate", props: {token: form_authenticity_token}, prerender: false
    end

    def create
        user = User.create(user_params)
        user.image.attach(params[:image])
        render component: "UserPage", props: {token: form_authenticity_token, user: user}, prerender: false
    end

    def show
        user = User.find(params[:id])

        render component: "UserPage", props: {
            token: form_authenticity_token, 
            user: user, 
            properties: user.properties.map {|property|
                {
                    id: property.id,
                    location: property.location,
                    image: url_for(property.image),
                    price_per_night: property.price_per_night
                }
            }, 
            bookings: user.bookings
            .filter {|b| Date.parse(b.from) > DateTime.now}
            .map {|booking|
                {
                    id: booking.id,
                    from: Date.parse(booking.from).strftime("%a %-d %b"),
                    location: booking.property.location,
                    property_id: booking.property.id,
                    image: url_for(booking.property.image),
                    nights: booking.nights
                }
            }
        }, prerender: false
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
