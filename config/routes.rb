Rails.application.routes.draw do
	root to: "examples#index"

  get "/console", to: "examples#console"
  get "/clipboard", to: "examples#clipboard"
  get "/isp_form", to: "examples#isp_form"
  get "/action_arguments", to: "examples#action_arguments"
  
end
