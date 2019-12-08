import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class TopMenu extends Component {
	render() {
		return (
			<Fragment>
				<div className="header__menu">
					<Link to="/logowanie">Zaloguj</Link>
					<Link to="/rejestracja">Załóż konto</Link>
					<Nav />
				</div>
			</Fragment>
		);
	}
}

export default TopMenu;
