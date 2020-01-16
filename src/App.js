import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import TopMenu from './components/Home/Header/TopMenu';
import LoginSignUpLayout from './components/Auth/LoginSignUpLayout';

const App = () => {
	return (
		<Router>
			<Route path="/" component={TopMenu} />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/:authType" children={<LoginSignUpLayout />} />
			</Switch>
		</Router>
	);
};

export default App;
