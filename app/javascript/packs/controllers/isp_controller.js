import { Controller } from "stimulus"

export default class extends Controller {
	initialize() {
		this.render()
	}

	get state() {
		return this.targets.find("state").value
	}

	render() {
		switch(this.state) {
			case '':
				this.show(["at-t", "comcast", "twc", "xfinity", "spectrum"])
				break;
			case 'CA':
				this.show(["spectrum"])
				this.hide(["at-t", "twc", "comcast", "xfinity"])
				break;
			case 'KY':
				this.show(["comcast"])
				this.hide(["at-t", "twc", "spectrum", "xfinity"])
				break;
			case 'TX':
				this.show(["twc"])
				this.hide(["at-t", "comcast", "spectrum", "xfinity"])
				break;
			case 'AK':
				this.hide(["at-t", "comcast", "twc", "xfinity", "spectrum"])
				break;
		}
	}

	show(isps) {
		isps.map(isp => this.show_isp(isp))
	}

	hide(isps) {
		isps.map(isp => this.hide_isp(isp))
	}

	show_isp(isp) {
		this.targets.find(isp).classList.remove("hidden")
	}

	hide_isp(isp) {
		this.targets.find(isp).classList.add("hidden")
	}
}