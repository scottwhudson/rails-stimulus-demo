Rails.application.routes.draw do
  get "/forms", to: "forms#index"

  get "/clipboard", to: "forms#clipboard"
  
  resources :pages, path: '/'
end
