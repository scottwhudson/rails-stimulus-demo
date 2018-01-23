// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
import { Application } from "stimulus"

// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/webpack-helpers/index.ts#L16
import { autoload } from "stimulus/webpack-helpers"

// https://webpack.js.org/api/module-methods/#require-context
const context = require.context("./controllers", true, /\.js$/)

const application = Application.start()

autoload(context, application)