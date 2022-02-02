Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json}  do
    resources :users, only:[:create, :show, :destroy, :update] do 
      resources :friendships, only:[:create, :destroy]
    end
    resources :server_memberships, only:[:create, :destroy]
    resources :servers, only:[:index, :show, :create, :update, :destroy] do 
      resources :channels, only:[:create]
    end
    resource :session, only:[:create, :destroy]
    resources :messages, only:[:index, :show, :update, :destroy]
    resources :channels, only:[:show, :update, :destroy] do
      resources :messages, only:[:create]
    end
    resources :conversations, only:[:index, :show, :create, :update, :destroy] do
      resources :direct_messages, only:[:create]
    end
    resources :direct_messages, only:[:index, :show, :update, :destroy]
  end
end
