Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy, :show]
    resource :user, only: [:create]
    resources :days, only: [:create, :index]
  end

  root "static_pages#root"
  get '*path', to: 'static_pages#root'
end
