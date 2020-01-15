import React from 'react';
import Decoration from '../Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';

const LogOut = () => {
	return (
		<section className="login-signup-layout">
			<h2>Wylogowanie nastąpiło {'\n'} pomyślnie!</h2>
			<Decoration />
			<div className="login-signup-layout__btns" id="home-btn">
				<Link className="login-signup-layout__btns-active" to="/">
					Strona główna
				</Link>
			</div>
		</section>
	);
};

export default LogOut;
