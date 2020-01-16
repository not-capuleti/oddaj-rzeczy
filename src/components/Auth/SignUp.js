import React, { Component } from 'react';
import Decoration from '../Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		repeatPassword: '',
		emailError: '',
		passwordError: '',
		repeatPasswordError: ''
	};

	setUserData = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { password, email, repeatPassword } = this.state;

		this.setState({
			passwordError: password.length > 5 ? '' : 'Podane hasło jest za krótkie!',
			emailError: email.includes('@') ? '' : 'Podany email jest nieprawidłowy!',
			repeatPasswordError: repeatPassword > 5 && repeatPassword === password ? '' : 'Hasła muszą być takie same'
		});
	};

	render() {
		const { email, password, repeatPassword, emailError, passwordError, repeatPasswordError } = this.state;

		return (
			<section className="login-signup-layout">
				<h2>Załóż konto</h2>
				<Decoration />
				<div className="login-signup-layout__form">
					<form id="sign-up" onSubmit={emailError === '' && passwordError === '' ? this.handleSubmit : null}>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							key="email"
							value={email}
							onChange={this.setUserData}
							className={emailError !== '' ? 'error-input-border' : null}
						/>
						<p className="error">{emailError}</p>
						<label htmlFor="password">Hasło</label>
						<input
							type="password"
							name="password"
							id="password"
							key="password"
							value={password}
							onChange={this.setUserData}
							className={passwordError !== '' ? 'error-input-border' : null}
						/>
						<p className="error">{passwordError}</p>
						<label htmlFor="repeatPassword">Powtórz hasło</label>
						<input
							type="password"
							name="repeatPassword"
							id="repeatPassword"
							key="repeatPassword"
							value={repeatPassword}
							onChange={this.setUserData}
							className={repeatPasswordError !== '' ? 'error-input-border' : null}
						/>
						<p className="error">{repeatPasswordError}</p>
					</form>
				</div>
				<div className="login-signup-layout__btns">
					<Link to="/logowanie">Zaloguj się</Link>
					<input type="submit" value="Załóż konto" form="sign-up" id="login-btn" />
				</div>
			</section>
		);
	}
}

export default SignUp;
