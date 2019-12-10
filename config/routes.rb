Rails.application.routes.draw do
  root "properties#index"
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"

  resources :properties, only: [:index, :show]

  resources :users do
    resources :properties do
      resources :bookings
    end
  end
end
