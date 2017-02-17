Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
      resources :albums, only: [:show]
    end
    resources :songs, only: [:show]
  end
end
