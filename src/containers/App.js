import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
        
    }
 
    onSearchChange = (event) => {
        //this.state.seachfiled  '''BAD!!!!''''
        this.setState({ searchfield : event.target.value})  
    }  

    render() {
        const { robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // defalut 1 true
        // 0 => false then turn into true
        return (!robots.length) ? 
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        {/* Children  */}
                        <CardList robots={filterRobots} />
                    </Scroll>
                    
                </div>
            );
    }
        
}
    


export default App;  