import React from 'react'
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about"className="bigA">About</a> </li> 
                        <li><a href="/project" className="bigA">Projects</a></li>
                        <li><a href="/contact"className="bigA">Contact</a></li>
                        
               </ul>
            </div> 

        </nav>
    </header>
)

export default Toolbar; 