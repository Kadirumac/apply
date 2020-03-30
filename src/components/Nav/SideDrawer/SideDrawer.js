import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css'


const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
      drawerClasses = 'side-drawer open';
    }

    return (
    <div>
        <div className={drawerClasses}>
            <span  > </span>
  
            <Link to="/about"className="bigA">About</Link>  
            <Link to="/project" className="bigA">Projects</Link>
            <Link to="/contact"className="bigA">Contact</Link>
            <Link to="/">Home</Link>
            
                      
        </div>
        <div style={{paddingLeft:'16px'}}></div>
    </div>
    );
}

export default SideDrawer;
