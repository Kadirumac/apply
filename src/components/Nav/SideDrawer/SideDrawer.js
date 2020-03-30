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
  
            <Link href="/about"className="bigA">About</Link>  
            <Link href="/project" className="bigA">Projects</Link>
            <Link href="/contact"className="bigA">Contact</Link>
            <Link href="/">Home</Link>
            
                      
        </div>
        <div style={{paddingLeft:'16px'}}></div>
    </div>
    );
}

export default SideDrawer;
