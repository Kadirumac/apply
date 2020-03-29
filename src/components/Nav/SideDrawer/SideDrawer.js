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
  
            <a href="/about"className="bigA">About</a>  
            <a href="/project" className="bigA">Projects</a>
            <a href="/contact"className="bigA">Contact</a>
            <a href="/">Home</a>
            
                      
        </div>
        <div style={{paddingLeft:'16px'}}></div>
    </div>
    );
}

export default SideDrawer;
