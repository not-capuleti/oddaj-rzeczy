import React from 'react';

const ThreeColumnsArticles = () => {
	const columns = [
		{
			number: '10',
			title: 'Oddanych worków',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
		},
		{
			number: '5',
			title: 'Wspartych organizacji',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
		},
		{
			number: '7',
			title: 'Zorganizowanych zbiórek',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
		}
	];

	return (
		<div className="three-columns__articles">
			{columns.map((column, idx) => (
				<article key={idx}>
					<span>{column.number}</span>
					<p className="column-title">{column.title.toUpperCase()}</p>
					<p className="column-description">{column.description}</p>
				</article>
			))}
		</div>
	);
};

export default ThreeColumnsArticles;
