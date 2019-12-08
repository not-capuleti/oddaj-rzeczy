import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerPhoto from '../../assets/Home-Hero-Image.jpg';

class HomeHeader extends Component {
	render() {
		return (
			<header>
				<div className="photo">
					<img className="photo__img" src={headerPhoto} alt="" />
				</div>
				<div className="menu">
					<nav className="menu__nav">
						<Link to="/logowanie">Zaloguj</Link>
						<Link to="/rejestracja">Załóż konto</Link>
					</nav>
				</div>
			</header>
		);
	}
}

export default HomeHeader;
