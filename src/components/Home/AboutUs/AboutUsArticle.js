import React from 'react';
import Decoration from '../svgComponents/Decoration';
import Signature from '../../../assets/Signature.svg';

const AboutUsArticle = () => {
	return (
		<article className="about-us__article">
			<h2>O nas</h2>
			<Decoration />
			<p>
				Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
				black-eyed pea prairie turnip leek lentil turnip greens parsnip.
			</p>
			<img src={Signature} alt="" />
		</article>
	);
};

export default AboutUsArticle;
