class PropertiesController < ApplicationController
    def index
        properties = Property.all.map {|property|
            {
                id: property.id,
                user_id: property.user.id,
                user: property.user.name,
                user_image: url_for(property.user.image),
                location: property.location,
                price_per_night: property.price_per_night,
                image: url_for(property.image)
            }
        }
        render component: "Properties", props: {properties: properties}
    end

    def create
        property = Property.create(properties_params)
        property.image.attach(params[:image])
        redirect_to user_url(params[:user_id])
    end

    def show
        property = Property.find(params[:id])
        user = User.find(property.user_id)
        reviews = property.bookings.reduce([]) {|memo, booking|
            memo << booking.reviews
                .filter {|r| r.is_host == 0}
                .map {|review|
                    {
                        id: review.id,
                        user: booking.user,
                        user_image: url_for(booking.user.image),
                        rating: review.rating,
                        comment: review.comment
                    }
                }
            memo.flatten!
        }
        render component: "PropertyPage", props: {
            property: property,
            image: url_for(property.image),
            token: form_authenticity_token,
            reviews: reviews
        }
    end

    private

    def properties_params
        params.permit(:location, :price_per_night, :user_id)
    end
end
