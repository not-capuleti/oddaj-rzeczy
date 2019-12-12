import React from 'react';
import ThreeColumnsImg from './ThreeColumnsImg';
import ThreeColumnsArticles from './ThreeColumnsArticles';

const ThreeColumns = () => {
	return (
		<section className="three-columns">
			<ThreeColumnsImg />
			<ThreeColumnsArticles />
		</section>
	);
};

export default ThreeColumns;
