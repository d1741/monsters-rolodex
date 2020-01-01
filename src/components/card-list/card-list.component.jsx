import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
	// console.log(props);
	// use curly braces to signal to the program that rendering props.children will require the use of javascript:

	<div className='card-list'>
		{props.monsters.map(monster => (
			<Card key={monster.id} monster={monster}>
				{monster.name}
			</Card>
		))}
	</div>
);
