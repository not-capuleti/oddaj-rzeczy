import React, { Fragment } from 'react';
import Header from './Header/Header';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import AboutUs from './AboutUs/AboutUs';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';
import TopMenu from './Header/TopMenu';

const Home = () => {
	return (
		<Fragment>
			<TopMenu />
			<Header />
			<ThreeColumns />
			<SimpleSteps />
			<AboutUs />
			<WhoWeHelp />
		</Fragment>
	);
};

export default Home;
