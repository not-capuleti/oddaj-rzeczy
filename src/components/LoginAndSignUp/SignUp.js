import React from 'react';
import Decoration from '../../components/Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<section className="login-signup-layout">
			<h2>Załóż konto</h2>
			<Decoration />
			<div className="login-signup-layout__form">
				<form id="sign-up">
					<label htmlFor="user-email">Email</label>
					<input type="email" id="user-email" name="email" />
					<label htmlFor="user-password">Hasło</label>
					<input type="password" id="user-password" name="password" />
					<label htmlFor="user-password-repeat">Powtórz hasło</label>
					<input type="password" id="user-password-repeat" name="password-repeat" />
				</form>
			</div>
			<div className="login-signup-layout__btns">
				<Link to="/logowanie">Zaloguj się</Link>
				<Link className="login-signup-layout__btns-active" to="/rejestracja">
					Załóż konto
				</Link>
			</div>
		</section>
	);
};

export default SignUp;
