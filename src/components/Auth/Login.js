import React from 'react';
import Decoration from '../../components/Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<section className="login-signup-layout">
			<h2>Zaloguj się</h2>
			<Decoration />
			<div className="login-signup-layout__form">
				<form id="sign-up">
					<label htmlFor="user-email">Email</label>
					<input type="email" id="user-email" name="email" />
					<label htmlFor="user-password">Hasło</label>
					<input type="password" id="user-password" name="password" />
				</form>
			</div>
			<div className="login-signup-layout__btns">
				<Link to="/rejestracja">Załóż konto</Link>
				<Link className="login-signup-layout__btns-active" to="/logowanie">
					Zaloguj się
				</Link>
			</div>
		</section>
	);
};

export default Login;
