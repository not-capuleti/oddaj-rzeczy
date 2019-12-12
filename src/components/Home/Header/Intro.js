import React, { Component } from 'react';
import Decoration from './Decoration';
import IntroBtns from './IntroBtns';

class Intro extends Component {
	render() {
		return (
			<div className="header__intro">
				<h1>Zacznij pomagać! {'\n'} Oddaj niechciane rzeczy w zaufane ręce</h1>
				<Decoration />
				<IntroBtns />
			</div>
		);
	}
}

export default Intro;
