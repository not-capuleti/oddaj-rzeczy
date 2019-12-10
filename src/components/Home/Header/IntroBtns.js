import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IntroBtns extends Component {
	render() {
		const introBtnTexts = [ 'Oddaj rzeczy', 'Zorganizuj zbiórkę' ];
		return (
			<div className="header__intro__btn">
				{introBtnTexts.map((text, idx) => (
					<Link to="/logowanie" key={idx}>
						{text.toUpperCase()}
					</Link>
				))}
			</div>
		);
	}
}

export default IntroBtns;
