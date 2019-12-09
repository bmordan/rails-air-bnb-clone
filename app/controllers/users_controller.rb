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
        properties = user.properties.map {|property|
            {
                id: property.id,
                location: property.location,
                image: url_for(property.image),
                price_per_night: property.price_per_night
            }
        }
        render component: "UserPage", props: {token: form_authenticity_token, user: user, properties: properties}, prerender: false
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
