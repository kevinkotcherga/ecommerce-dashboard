Rails.application.routes.draw do
  resources :notes, only: [:index]
  get '/orders/download_csv'
  get '/orders/index'
  get :search, controller: :search

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
