import React, { Component } from 'react';
import ListOfSubjects from '../ListOfSubjects';

class Fundations extends Component {
	state = {
		type: 'Fundacja',
		description:
			'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują',
		fundations: [
			{
				name: 'Dbam o zdrowie',
				task: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki' ]
			},
			{
				name: 'Dla dzieci',
				task: 'Pomoc dzieciom z ubogich rodzin',
				needs: [ 'ubrania', 'meble', 'zabawki' ]
			},
			{
				name: 'Bez domu',
				task: 'Pomoc osobom nieposiadającym miejsca zamieszkania',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble' ]
			},
			{
				name: 'Gorące serce',
				task: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki' ]
			},
			{
				name: 'Razem raźniej',
				task: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki' ]
			},
			{
				name: 'Pomagamy!',
				task: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki' ]
			},
			{
				name: 'Zaadoptuj zwierzaka',
				task: 'Adopcja zwierząt',
				needs: [ 'ubrania', 'jedzenie', 'sprzęt AGD', 'meble', 'zabawki' ]
			}
		]
	};

	render() {
		const { description, fundations, type } = this.state;
		return <ListOfSubjects description={description} organization={fundations} type={type} />;
	}
}

export default Fundations;
