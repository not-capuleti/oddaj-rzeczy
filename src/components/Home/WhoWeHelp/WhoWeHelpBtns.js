import React, { Component, Fragment } from 'react';
import Fundations from './Fundations';
import Ngos from './Ngos';
import Locals from './Locals';

class WhoWeHelpBtns extends Component {
	state = {
		clicked: ''
	};

	firstClicked() {
		this.setState({
			clicked: 'fundations'
		});
	}

	secondClicked() {
		this.setState({
			clicked: 'ngos'
		});
	}

	thirdClicked() {
		this.setState({
			clicked: 'locals'
		});
	}

	render() {
		return (
			<Fragment>
				<nav className="who-we-help__btns">
					<button onClick={this.firstClicked.bind(this)}>Fundacjom</button>
					<button onClick={this.secondClicked.bind(this)}>
						Organizacjom <span>pozarządowym</span>
					</button>
					<button onClick={this.thirdClicked.bind(this)}>
						Lokalnym <span>zbiórkom</span>
					</button>
				</nav>
				{this.state.clicked === 'fundations' ? <Fundations /> : null}
				{this.state.clicked === 'ngos' ? <Ngos /> : null}
				{this.state.clicked === 'locals' ? <Locals /> : null}
			</Fragment>
		);
	}
}

export default WhoWeHelpBtns;
