// https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/controller.ts
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  connect() {
    console.log("this thing on?")
  }
  
  greet() {
    console.log(`Hello, ${this.nameTarget.value}!`)
  }

  bar() {
    console.log("baz")
  }
}
