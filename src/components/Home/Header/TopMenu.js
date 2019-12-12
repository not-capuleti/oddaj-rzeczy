import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const TopMenu = () => {
	return (
		<div className="header__menu">
			<Link to="/logowanie">Zaloguj</Link>
			<Link id="sign-in" to="/rejestracja">
				Załóż konto
			</Link>
			<Nav />
		</div>
	);
};

export default TopMenu;
