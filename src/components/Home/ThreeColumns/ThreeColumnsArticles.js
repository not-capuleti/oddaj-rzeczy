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
			{columns.map((column) => (
				<article>
					<span>{column.number}</span>
					<p>{column.title.toUpperCase()}</p>
					<p>{column.description}</p>
				</article>
			))}
		</div>
	);
};

export default ThreeColumnsArticles;
