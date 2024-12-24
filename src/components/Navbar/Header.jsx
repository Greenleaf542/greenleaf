import React from 'react'
import './Header.css'
import logo from '../../img/log1.png'

function Navbar() {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        {/* <i class='bx bx-menu' id="menu-icon"></i> */}
        {/* <h1>GreenLeafStudio</h1> */}
        <ul>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#"> About </a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact </a></li>
            <li><a href="#" className='last-text-navbar'><button className='btn'><i class='bx bx-pencil'></i> &nbsp;Dive in</button></a></li>
        </ul>
    </nav>
  )
}

export default Navbar
