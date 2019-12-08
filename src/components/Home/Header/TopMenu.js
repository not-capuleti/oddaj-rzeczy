import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class TopMenu extends Component {
	render() {
		return (
			<div className="menu">
				<Link to="/logowanie">Zaloguj</Link>
				<Link to="/rejestracja">Załóż konto</Link>
				<Nav />
			</div>
		);
	}
}

export default TopMenu;
