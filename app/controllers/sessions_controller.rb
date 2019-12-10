class SessionsController < ApplicationController
    def new
    end

    def create
        user = User.find_by({name: params[:sessions][:name]})
        if user && user.authenticate(params[:sessions][:password])
            session[:user_id] = user.id
            redirect_to user_url(user)
        else
            redirect_to login_url
        end
    end

    def destroy
        session.delete(:user_id)
        redirect_to root_url
    end
end
