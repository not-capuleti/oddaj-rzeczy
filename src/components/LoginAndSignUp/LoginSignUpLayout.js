import React from 'react';
import { useParams } from 'react-router';
import SignUp from './SignUp';
import Login from './Login';

const LoginSignUpLayout = () => {
	let { authType } = useParams();

	switch (authType) {
		case 'rejestracja':
			return <SignUp />;
		case 'logowanie':
			return <Login />;
		default:
			return <Login />;
	}
};

export default LoginSignUpLayout;
