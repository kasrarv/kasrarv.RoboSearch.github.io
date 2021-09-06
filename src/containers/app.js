import React, {Component} from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/Searchbox.js';
import Scrol from '../components/scrol';
import './app.css';




class App extends Component {
  constructor() {
       super()
        this.state = {
                robots: [],
                Searchbox: ''
            }
        }

            componentDidMount() {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(Response=> Response.json())
                 .then(users=> this.setState({robots: users}));   
            }
            
            
        
    onsearchchange = (event) => {
        this.setState({Searchbox: event.target.value})
    
    }

    
    render() {
        const Filterrobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.Searchbox.toLowerCase());
    })

    if (this.state.robots.length === 0) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
            <h1 className= 'f1'>Robo Friends</h1>
            <Searchbox searchchange={this.onsearchchange} />
            <Scrol>
            <Cardlist robots={Filterrobots} />
            </Scrol>
            </div>
        );

       }
    } 
}

export default App;