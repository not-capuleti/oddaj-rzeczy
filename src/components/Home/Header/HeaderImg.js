import React from 'react';
import headerPhoto from '../../../assets/Home-Hero-Image.jpg';

const HeaderImg = () => {
	return (
		<div className="header__photo">
			<img className="header__photo_img" src={headerPhoto} alt="" />
		</div>
	);
};

export default HeaderImg;
