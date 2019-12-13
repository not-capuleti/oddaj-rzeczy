import React from 'react';
import AboutUsArticle from './AboutUsArticle';
import AboutUsImg from '../../../assets/People.jpg';

const AboutUs = () => {
	return (
		<section className="about-us">
			<AboutUsArticle />
			<img src={AboutUsImg} alt="" />
		</section>
	);
};

export default AboutUs;
