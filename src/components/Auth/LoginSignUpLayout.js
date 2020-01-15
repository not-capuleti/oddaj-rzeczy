import React from 'react';
import { useParams } from 'react-router';
import SignUp from './SignUp';
import Login from './Login';
import LogOut from './LogOut';

const LoginSignUpLayout = () => {
	let { authType } = useParams();

	switch (authType) {
		case 'rejestracja':
			return <SignUp />;
		case 'logowanie':
			return <Login />;
		case 'wylogowano':
			return <LogOut />;
		default:
			return <Login />;
	}
};

export default LoginSignUpLayout;
