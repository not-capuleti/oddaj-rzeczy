import React from 'react';
import Icon1 from '../../../assets/Icon-1.svg';
import Icon2 from '../../../assets/Icon-2.svg';
import Icon3 from '../../../assets/Icon-3.svg';
import Icon4 from '../../../assets/Icon-4.svg';

const Icons = () => {
	const icons = [
		{ svgPic: Icon1, title: 'Wybierz rzeczy', description: 'ubrania, zabawki, sprzęt i inne' },
		{ svgPic: Icon2, title: 'Spakuj je', description: 'skorzystaj z worków na śmieci' },
		{ svgPic: Icon3, title: 'Zdecyduj komu chcesz pomóc', description: 'wybierz zaufane miejsce' },
		{ svgPic: Icon4, title: 'Zamów kuriera', description: 'kurier przyjedzie w dogodnym terminie' }
	];
	return (
		<div className="simple-steps__icons">
			{icons.map((icon, idx) => (
				<div className="simple-steps__icons-single" key={idx}>
					<img src={icon.svgPic} alt="" />
					<p className="icon-title">{icon.title}</p>
					<p className="icon-description">{icon.description}</p>
				</div>
			))}
		</div>
	);
};

export default Icons;
