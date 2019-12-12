import React from 'react';
import Decoration from '../svgComponents/Decoration';
import IntroBtns from './IntroBtns';

const Intro = () => {
	return (
		<div className="header__intro">
			<h1>Zacznij pomagać! {'\n'} Oddaj niechciane rzeczy w zaufane ręce</h1>
			<Decoration />
			<IntroBtns />
		</div>
	);
};

export default Intro;
