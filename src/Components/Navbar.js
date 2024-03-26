import React from 'react'
import {LOGO_URL} from '../Utils/constants'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="" />
      </div>
      <div className='nav-items'>
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
