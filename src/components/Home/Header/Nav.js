import React from 'react';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const Nav = () => {
	const navElements = [
		{ title: 'O co chodzi?', to: 'simple-steps' },
		{ title: 'O nas', to: 'about-us' },
		{ title: 'Fundacja i organizacje', to: 'who-we-help' },
		{ title: 'Kontakt', to: '' }
	];

	return (
		<nav className="header__menu__nav">
			<LinkRouter to="/">Start</LinkRouter>
			{navElements.map((element, idx) => (
				<Link key={`${element}_${idx}`} to={element.to} spy={true} smooth={true} offset={0} duration={500}>
					{element.title}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
