import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <header className='grid-d-12 grid-m-12'>
          <div className='main-navigation'>
              <Link to='/'><h4>Home</h4></Link>
            </div>
          <div className='main-navigation'>
            <Link to='/about'><h4>About</h4></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/team'><h4>Team</h4></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/contact'><h4>Contact</h4></Link>
          </div>
      </header>
    )
}

export default Header