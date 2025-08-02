import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

function Drawer() {
    return (
        <div className='drawer-bg-container'>
            <ul className='drawer-items-container'>
                <NavLink exact to="/" className="drawer-link"><li className='drawer-item'>HOME</li></NavLink>
                <NavLink to="/all-doctors" className="drawer-link"><li className='drawer-item'>ALL DOCTORS</li></NavLink>
                <NavLink to="/book-appointment" className="drawer-link"><li className='drawer-item'>BOOK APPOINTMENT</li></NavLink>
                <NavLink to="/about-us" className="drawer-link"><li className='drawer-item'>ABOUT</li></NavLink>
                <NavLink to="/contact-us" className="drawer-link"><li className='drawer-item'>CONTACT</li></NavLink>
                <li className='drawer-item'>LOGOUT</li>
            </ul>
        </div>
    )
}

export default Drawer
