import React, { Component } from 'react';
import WhoWeHelpBtns from './WhoWeHelpBtns';

class WhoWeHelpList extends Component {
	state = {
		clicked: ''
	};

	clickHandler(org) {
		this.setState({
			clicked: org
		});
	}

	render() {
		return <WhoWeHelpBtns clickHandler={this.clickHandler} />;
	}
}

export default WhoWeHelpList;
