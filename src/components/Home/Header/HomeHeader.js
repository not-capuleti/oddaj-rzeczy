import React, { Component } from 'react';
import TopMenu from './TopMenu';
import HeaderImg from './HeaderImg';

class HomeHeader extends Component {
	render() {
		return (
			<header>
				<HeaderImg />
				<TopMenu />
			</header>
		);
	}
}

export default HomeHeader;
