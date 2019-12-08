import React, { Component } from 'react';
import headerPhoto from '../../../assets/Home-Hero-Image.jpg';

class HeaderImg extends Component {
	render() {
		return (
			<div className="photo">
				<img className="photo__img" src={headerPhoto} alt="" />
			</div>
		);
	}
}

export default HeaderImg;
