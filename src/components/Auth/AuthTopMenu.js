import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

const AuthTopMenu = () => {
	return (
		<div className="header__menu">
			<LinkRouter id="login" to="/logowanie">
				Zaloguj
			</LinkRouter>
			<LinkRouter id="sign-in" to="/rejestracja">
				Załóż konto
			</LinkRouter>
			<nav className="header__menu__nav">
				<LinkRouter to="/">Strona główna</LinkRouter>
			</nav>
		</div>
	);
};

export default AuthTopMenu;
