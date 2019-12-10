class BookingsController < ApplicationController
    def create
        Booking.create(booking_params)
        redirect_to user_url(params[:user_id])
    end

    private

    def booking_params
        params.permit(:from, :nights, :user_id, :property_id)
    end
end
