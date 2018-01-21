Rails.application.routes.draw do
  get "/forms", to: "forms#index"
  
  resources :pages, path: '/'
end
