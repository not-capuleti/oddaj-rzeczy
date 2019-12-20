import React, { Fragment } from 'react';
import Header from './Header/Header';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import AboutUs from './AboutUs/AboutUs';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<ThreeColumns />
			<SimpleSteps />
			<AboutUs />
			<WhoWeHelp />
		</Fragment>
	);
};

export default Home;
