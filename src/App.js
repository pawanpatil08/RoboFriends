import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

import { robots } from './components/robots';
import './App.css'
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(res => res.json()).
      then(users => this.setState({
        robots: users
      }));
  }
  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    })

  }
  render() {
    const {robots,searchField}=this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    });
   return !robots.length?
      <h1>Loading</h1>
    
    :
       (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    
  }
}

export default App;
