import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <header className='grid-d-12 grid-m-12'>
          <div className='main-navigation'>
              <Link to='/'><h5>Home</h5></Link>
            </div>
          <div className='main-navigation'>
            <Link to='/about'><h5>About</h5></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/team'><h5>Team</h5></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/contact'><h5>Contact</h5></Link>
          </div>
      </header>
    )
}

export default Header