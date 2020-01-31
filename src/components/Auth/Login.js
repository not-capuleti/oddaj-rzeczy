import React, { Component, Fragment } from 'react';
import Decoration from '../Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';
import AuthTopMenu from './AuthTopMenu';

class Login extends Component {
	state = {
		email: '',
		password: '',
		emailError: '',
		passwordError: ''
	};

	setUserData = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { password, email } = this.state;

		this.setState({
			passwordError: password.length > 5 ? '' : 'Podane hasło jest za krótkie!',
			emailError: email.includes('@') ? '' : 'Podany email jest nieprawidłowy!'
		});
	};

	render() {
		const { email, password, emailError, passwordError } = this.state;

		return (
			<Fragment>
				<AuthTopMenu />
				<section className="login-signup-layout">
					<h2>Zaloguj się</h2>
					<Decoration />
					<div className="login-signup-layout__form">
						<form
							id="sign-up"
							onSubmit={emailError === '' && passwordError === '' ? this.handleSubmit : null}
						>
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
						</form>
					</div>
					<div className="login-signup-layout__btns">
						<Link to="/rejestracja">Załóż konto</Link>
						<input type="submit" value="Zaloguj się" form="sign-up" id="login-btn" />
					</div>
				</section>
			</Fragment>
		);
	}
}

export default Login;
