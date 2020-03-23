import React,{Component} from 'react';
import './App.css'
import Particles from 'react-particles-js';
import particles from './particles';
import Navbar from './components/Nav/NavBar/NavBar'
class App extends Component{
  
    render(){
        return (
    
          <div className="body"> 
          <Navbar/>
          <Particles className="particles" params={ particles } />
          </div>

        );
    };
 
}
export default App;
