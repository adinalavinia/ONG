import React from 'react'
import './Navbar.css'
import img_logo from '../../assets/images/img_logo.jpg'


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img className='logo' src={img_logo} alt=''/>
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
