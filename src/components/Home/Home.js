import React, { Fragment } from 'react';
import Header from './Header/Header';
import ThreeColumns from './ThreeColumns/ThreeColumns';
import SimpleSteps from './SimpleSteps/SimpleSteps';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<ThreeColumns />
			<SimpleSteps />
		</Fragment>
	);
};

export default Home;
