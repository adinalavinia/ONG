import React from 'react'
import './Navbar.css'
import dove_logo from '../../assets/images/dove_logo.png'


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img className='logo' src={dove_logo} alt=''/>
        <ul className='navbar-list'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
