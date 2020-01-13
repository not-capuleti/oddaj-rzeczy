import React, { Component } from 'react';
import Decoration from '../svgComponents/Decoration';
import WhoWeHelpBtns from './WhoWeHelpList';

class WhoWeHelp extends Component {
	render() {
		return (
			<section className="who-we-help">
				<h2>Komu pomagamy?</h2>
				<Decoration />
				<WhoWeHelpBtns />
			</section>
		);
	}
}

export default WhoWeHelp;
