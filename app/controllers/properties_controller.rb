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
        user = User.find(params[:user_id])
        render component: "PropertyPage", props: {
            property: property,
            image: url_for(property.image),
            user: user,
            token: form_authenticity_token
        }
    end

    private

    def properties_params
        params.permit(:location, :price_per_night, :user_id)
    end
end
