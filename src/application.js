import { Application } from "stimulus"
import { autoload } from "stimulus/webpack-helpers"

const application = Application.start()
console.log("loading");
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application)