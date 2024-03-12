import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img className='logo' src='./images/img-logo.jpg' alt=''></img>
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
