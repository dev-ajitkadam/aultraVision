import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='NavBar'>
        <div className='logo'>

        </div>
        <div className='nav'>
            <ul>
                <li>
                    <link to="/" className='home'>
                    Home
                    </link>
                </li>
                <li>
                    <link to="/services" className='servi'>
                    Services
                    </link>
                </li>
                <li>
                    <link to="/about" className='about'>
                    About US
                    </link>
                </li>
                <li>
                    <link to="/contact" className='contact'>
                    Contact US
                    </link>
                </li><li>
                    <link to="/login" className='login'>
                    Login/Register
                    </link>
                </li>
                
            </ul>

        </div>
    </div>
  )
}

export default NavBar;