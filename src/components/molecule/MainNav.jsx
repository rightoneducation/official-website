import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <nav className='flex-box'>
          <div className='main-navigation'>
              <Link to='/'><h2>Home</h2></Link>
            </div>
          <div className='main-navigation'>
            <Link to='/about'><h2>About</h2></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/team'><h2>Team</h2></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/contact'><h2>Contact</h2></Link>
          </div>
      </nav>
    )
}

export default Header