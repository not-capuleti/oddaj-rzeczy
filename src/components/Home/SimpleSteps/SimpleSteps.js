import React from 'react';
import Decoration from '../svgComponents/Decoration';
import Icons from '../SimpleSteps/Icons';
import { Link } from 'react-router-dom';

const SimpleSteps = () => {
	return (
		<section className="simple-steps">
			<h2>Wystarczą 4 proste kroki</h2>
			<Decoration />
			<Icons />
			<Link to="/logowanie">
				<span>ODDAJ</span>
				{'\n'}
				<span>RZECZY</span>
			</Link>
		</section>
	);
};

export default SimpleSteps;
