import React, { Component, Fragment } from 'react';
import WhoWeHelpBtns from './WhoWeHelpBtns';
import Foundations from './typeOfHelpers/Foundations';
import Ngos from './typeOfHelpers/Ngos';
import Locals from './typeOfHelpers/Locals';

class WhoWeHelpList extends Component {
	state = {
		clicked: 'foundations'
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
			typeOfHelpers = <Ngos />;
		} else if (clicked === 'locals') {
			typeOfHelpers = <Locals />;
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
