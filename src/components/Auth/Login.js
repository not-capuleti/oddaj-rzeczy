import React, { Component } from 'react';
import Decoration from '../Home/svgComponents/Decoration';
import { Link } from 'react-router-dom';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: [],
		isSubmitted: false
	};

	setUserData = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	validation = (e) => {
		const errors = [];
		const isSubmitted = true;
		const { email, password } = this.state;

		e.preventDefault();

		if (!email.includes('@')) {
			errors.push('Podany email jest nieprawidłowy!');
		}
		if (password.length < 6) {
			errors.push('Podane hasło jest za krótkie!');
		}

		this.setState({ errors, isSubmitted });
	};

	render() {
		const { email, password, errors, isSubmitted } = this.state;

		return (
			<section className="login-signup-layout">
				<h2>Zaloguj się</h2>
				<Decoration />
				<div className="login-signup-layout__form">
					<form id="sign-up" onSubmit={this.validation} className={errors.length && 'error-input-border'}>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							key="email"
							value={email}
							onChange={this.setUserData}
						/>
						{isSubmitted && errors.length ? <p className="error">{this.state.errors[0]}</p> : null}
						<label htmlFor="password">Hasło</label>
						<input
							type="text"
							name="password"
							id="password"
							key="password"
							value={password}
							onChange={this.setUserData}
						/>
						{isSubmitted && errors.length ? <p className="error">{this.state.errors[1]}</p> : null}
					</form>
				</div>
				<div className="login-signup-layout__btns">
					<Link to="/rejestracja">Załóż konto</Link>
					<input type="submit" value="Zaloguj się" form="sign-up" id="login-btn" />
				</div>
			</section>
		);
	}
}

export default Login;
