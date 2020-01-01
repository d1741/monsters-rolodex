import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search/search.component';
import './App.css';

// use classes instead of functional components when you need access to state
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}
	//life cycle method #1
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			// converts resules to JSON format that our JS can understand:
			.then(response => response.json())
			// gets the list of users and updates our state with the names as the "body":
			.then(users => this.setState({ monsters: users }));
	}
	render() {
		// filters out monsters based on user search
		// this destructuring is equivalent to:
		// const monsters = this.state.monsters;
		// const searchField = this.state.searchField;
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={e => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredMonsters}></CardList>
			</div>
		);
	}
}

export default App;
