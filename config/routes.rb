FinderApp::Application.routes.draw do

  resources :friendships
  resources :users

  root "welcome#index"

  get "/login", to: "session#new"
  post "/login", to: "session#create"
  get "/logout", to: "session#destroy"

end
