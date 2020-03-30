import React from 'react'
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Link} from 'react-router-dom'


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">

    
            <div className="spacer">  
         
                        <div className="col-10  my-2 text-title">
                                <p className="text-uppercase text-center ku"  >
                                    <strong > Kadir Umac</strong>
                                </p>
                         
                        </div>
               
              </div>
            <div className="toolbar_toggle-button">
               <DrawerToggleButton click={props.drawerClickHandler} />   
            </div>
        
             <div className="toolbar_navigation-items ">
                <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about"className="bigA">About</Link> </li> 
                        <li><Link to="/project" className="bigA">Projects</Link></li>
                        <li><Link to="/contact"className="bigA">Contact</Link></li>
                        
               </ul>
            </div> 

        </nav>
    </header>
)

export default Toolbar; 