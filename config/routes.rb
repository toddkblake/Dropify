Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      resources :playlists, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
      resources :albums, only: [:show]
    end
    resources :songs, only: [:show]
    resources :playlists, only: [:index, :create, :update, :destroy]
    resources :playlist_songs, only: [:create]
  end
end
