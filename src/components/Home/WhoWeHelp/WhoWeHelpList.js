import React, { Component, Fragment } from 'react';
import WhoWeHelpBtns from './WhoWeHelpBtns';
import Foundations from './typeOfHelpers/Foundations';

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
		const { clicked } = this.state;

		let typeOfHelpers;

		if (clicked === 'foundations') {
			typeOfHelpers = <Foundations />;
		} else if (clicked === 'ngos') {
			// typeOfHelpers = <Ngos />;
			typeOfHelpers = null;
		} else if (clicked === 'locals') {
			// typeOfHelpers = <Locals />;
			typeOfHelpers = null;
		}

		return (
			<Fragment>
				<WhoWeHelpBtns clicked={clicked} clickHandler={this.clickHandler.bind(this)} />
				{typeOfHelpers}
			</Fragment>
		);
	}
}

export default WhoWeHelpList;
