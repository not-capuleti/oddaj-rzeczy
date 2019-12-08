import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
	render() {
		return (
			<nav className="header__menu__nav">
				<Link to="" spy={true} smooth={true} offset={0} duration={500}>
					Start
				</Link>
				<Link to="" spy={true} smooth={true} offset={0} duration={500}>
					O co chodzi?
				</Link>
				<Link to="" spy={true} smooth={true} offset={0} duration={500}>
					O nas
				</Link>
				<Link to="" spy={true} smooth={true} offset={0} duration={500}>
					Fundacja i organizacje
				</Link>
				<Link to="" spy={true} smooth={true} offset={0} duration={500}>
					Kontakt
				</Link>
			</nav>
		);
	}
}

export default Nav;
