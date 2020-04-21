import React,{Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import ProjectList from './components/ProjectList';
import Details from './components/Details';
import Modal from './components/Modal';
import Default from './components/Default';
import Navbar from './components/Nav/NavBar/NavBar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  
    render(){
        return (
    
          <React.Fragment>
          <Navbar/>
          <Switch>
        
          <Route exact path="/" component={Home} ></Route>
          <Route exact path={`${process.env.PUBLIC_URL}/project`} component={ProjectList}/>
            {/* <Route exact path="/project"  component={ProjectList}></Route> */}
            <Route exact path="/details" component={Details}></Route>
            <Route exact path="/about" component={About} ></Route>
            <Route exact path="/contact" component={Contact} ></Route>
            <Route component={Default}></Route>
          </Switch>
          <Modal/>        
      </React.Fragment>

        );
    };
 
}
export default App;
