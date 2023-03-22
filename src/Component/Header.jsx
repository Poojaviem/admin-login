import React from 'react';
import {Link }from "react-router-dom"
function Header() {
  return (
    <div className='header'>

        <ul className='ul'>
           <Link to='/' className='link'> <li>Home</li></Link>
           <Link to='/login' className='link'> <li>Admin Login</li></Link>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header