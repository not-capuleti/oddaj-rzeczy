import React, { Component } from 'react';

class WhoWeHelpBtns extends Component {
	render() {
		const { clickHandler, clicked } = this.props;
		return (
			<nav className="who-we-help__btns">
				<button
					className={clicked === 'foundations' ? 'who-we-help__btns-active' : null}
					onClick={() => clickHandler('foundations')}
				>
					Fundacjom
				</button>
				<button
					className={clicked === 'ngos' ? 'who-we-help__btns-active' : null}
					onClick={() => clickHandler('ngos')}
				>
					Organizacjom <span>pozarządowym</span>
				</button>
				<button
					className={clicked === 'locals' ? 'who-we-help__btns-active' : null}
					onClick={() => clickHandler('locals')}
				>
					Lokalnym <span>zbiórkom</span>
				</button>
			</nav>
		);
	}
}

export default WhoWeHelpBtns;
