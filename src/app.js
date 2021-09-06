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
        const { robots, Searchbox } = this.state;
        const Filterrobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(Searchbox.toLowerCase());
    })

    return !robots.length ?
        <h1>Loading</h1> :
     (
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


export default App;