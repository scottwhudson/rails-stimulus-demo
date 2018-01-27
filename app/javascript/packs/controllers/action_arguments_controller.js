import { Controller } from "stimulus"

export default class extends Controller {
	initialize() {
		console.log('foo')
	}	

	skip(event) {
		const element = event.target
		this.targets.findAll("argument")[element.dataset.argument]
	}

	fetchData() {
		fetch('pages/list', {
			method: 'GET',
			header: new Headers({
				'Content-Type': 'application/json'
			})
		}).then( res => res.json())
		.catch(error => console.error('Error', error))
		.then(response => console.log('Success:', response))
	}
}