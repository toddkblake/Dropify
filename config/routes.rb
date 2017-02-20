Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update] do
      resources :playlists, only: [:show]
      get 'playlists', to: 'playlists#user_playlists'
    end
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show] do
      resources :albums, only: [:show]
    end
    resources :songs, only: [:show]
    resources :playlists, only: [:index, :create, :update, :delete]
    resources :playlist_songs, only: [:create, :update, :destroy]
  end
end
