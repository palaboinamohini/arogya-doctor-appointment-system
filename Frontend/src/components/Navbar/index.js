import { Component} from 'react'
import Drawer from '../Drawer'
import {NavLink, Link} from 'react-router-dom'
import { PiList } from "react-icons/pi"
import './index.css'

class Navbar extends Component{
    state = {isDrawerOpen:false}
    toggleDrawer = () => {
        this.setState(prevState => ({
            isDrawerOpen:!prevState.isDrawerOpen
        }))
    }

    render() {
        const {isDrawerOpen} = this.state
        return (
           <nav className='nav-bg-container'>
                <div className='nav-container'>
                    <Link to="/" className="nav-logo-container">
                        <img src="https://icones.pro/wp-content/uploads/2021/03/symbole-du-docteur-icone-png-vert.png" alt="WebsiteLogo" className='nav-logo' />
                        <h1 className='nav-logoname'>Arogya</h1>
                    </Link>
                    <div className='nav-items-sm-container'>
                        <div className='expand-collapse-container'>
                            <button onClick={this.toggleDrawer} className='expand-toggle-button'><PiList size={25} /></button>
                        </div>
                        {isDrawerOpen && <Drawer />}
                    </div>
                    <ul className='nav-items-lg-container'>
                        <li className='nav-link'>
                            <NavLink exact to="/" className="nav-item">HOME</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/all-doctors" className="nav-item">ALL DOCTORS</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/book-appointment" className="nav-item">BOOK APPOINTMENT</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/about-us" className="nav-item">ABOUT US</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink to="/contact-us" className="nav-item">CONTACT US</NavLink>
                        </li>
                    </ul>
                    <button className='logout-lg-btn'>Logout</button>
                </div>
            </nav> 
        )
    }
}

export default Navbar