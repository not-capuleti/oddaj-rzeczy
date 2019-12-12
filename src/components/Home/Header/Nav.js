import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
	render() {
		const navElements = [
			{ title: 'Start', to: '' },
			{ title: 'O co chodzi?', to: '' },
			{ title: 'O nas', to: '' },
			{ title: 'Fundacja i organizacje', to: '' },
			{ title: 'Kontakt', to: '' }
		];

		return (
			<nav className="header__menu__nav">
				{navElements.map((element, idx) => (
					<Link key={`${element}_${idx}`} to={element.to} spy={true} smooth={true} offset={0} duration={500}>
						{element.title}
					</Link>
				))}
			</nav>
		);
	}
}

export default Nav;
