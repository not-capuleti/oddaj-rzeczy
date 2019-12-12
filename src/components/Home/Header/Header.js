import React from 'react';
import TopMenu from './TopMenu';
import HeaderImg from './HeaderImg';
import Intro from './Intro';

const Header = () => {
	return (
		<header className="header">
			<HeaderImg />
			<TopMenu />
			<Intro />
		</header>
	);
};

export default Header;
