import React, { Component } from 'react';
import TopMenu from './TopMenu';
import HeaderImg from './HeaderImg';
import Intro from './Intro';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<HeaderImg />
				<TopMenu />
				<Intro />
			</header>
		);
	}
}

export default Header;
