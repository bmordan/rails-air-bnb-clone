Rails.application.routes.draw do
  root "properties#index"
  resources :properties, only: [:index, :show]

  resources :users do
    resources :properties do
      resources :bookings
    end
  end
end
