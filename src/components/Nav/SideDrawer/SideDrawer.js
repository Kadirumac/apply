import React from 'react';

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
  
            <a href="/" className="bigA">My Profile</a>
            <a href="/" className="bigA">Projects</a>
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">About</a>            
        </div>
        <div style={{paddingLeft:'16px'}}></div>
    </div>
    );
}

export default SideDrawer;
