import React, { Fragment } from 'react';
import Header from './Header/Header';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<ThreeColumns />
			<SimpleSteps />
			<AboutUs />
		</Fragment>
	);
};

export default Home;
