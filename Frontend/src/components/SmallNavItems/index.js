import React from 'react'
import { PiList } from "react-icons/pi"
import './index.css'

function SmallNavItems({ toggleDrawer }) {
    return (
        <div className='expand-collapse-container'>
            <button onClick={toggleDrawer} className='expand-toggle-button'><PiList size={25} /></button>
        </div>
    );
}

export default SmallNavItems;
