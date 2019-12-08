import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignIn from './components/SignIn/SignIn';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/logowanie" component={Login} />
				<Route exact path="/rejestracja" component={SignIn} />
			</Switch>
		</Router>
	);
}

export default App;
