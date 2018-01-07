import { Controller } from "stimulus"

export default class extends Controller {
	connect() {
		console.log("this thing on?")
	}
	
	greet() {
		console.log(`Hello, ${this.name}!`)
	}

	bar() {
		console.log("baz")
	}

	get name() {
		return this.targets.find("name").value
	}
}

console.log('hello from foo controller')