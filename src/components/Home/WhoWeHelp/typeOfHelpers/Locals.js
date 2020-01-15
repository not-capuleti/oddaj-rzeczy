import React, { Component } from 'react';
import ListOfSubjects from '../ListOfSubjects';

class Locals extends Component {
	state = {
		type: 'Zbiórka',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
		locals: [
			{
				name: 'Lorem Ipsum 1',
				task: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
				needs: [ 'Egestas', 'sed', 'tempus' ]
			},
			{
				name: 'Lorem Ipsum 2',
				task: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
				needs: [ 'Ut', 'aliquam', 'purus', 'sit', 'amet' ]
			},
			{
				name: 'Lorem Ipsum 3',
				task: 'Scelerisque in dictum non consectetur a erat nam.',
				needs: [ 'Mi', 'quis', 'hendrerit', 'dolor' ]
			},
			{
				name: 'Lorem Ipsum 4',
				task: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
				needs: [ 'Ut', 'aliquam', 'purus', 'sit', 'amet' ]
			},
			{
				name: 'Lorem Ipsum 5',
				task: 'Scelerisque in dictum non consectetur a erat nam.',
				needs: [ 'Mi', 'quis', 'hendrerit', 'dolor' ]
			},
			{
				name: 'Lorem Ipsum 6',
				task: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
				needs: [ 'arcu', 'molestie', 'lobortis' ]
			}
		]
	};

	render() {
		const { description, locals, type } = this.state;
		return <ListOfSubjects description={description} organization={locals} type={type} />;
	}
}

export default Locals;
