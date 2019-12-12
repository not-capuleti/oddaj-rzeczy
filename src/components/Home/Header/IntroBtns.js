import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class IntroBtns extends Component {
	render() {
		return (
			<div className="header__intro__btn">
				<Link to="/logowanie">
					<span>ODDAJ</span>
					{'\n'}
					<span>RZECZY</span>
				</Link>
				<Link to="/logowanie">
					<span>ZORGANIZUJ</span>
					{'\n'}
					<span>ZBIÓRKĘ</span>
				</Link>
			</div>
		);
	}
}

export default IntroBtns;