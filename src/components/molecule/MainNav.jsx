import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return (
      <nav className='flex-box mobile'>
          <div className='main-navigation'>
              <Link to='/'><h1>Home</h1></Link>
            </div>
          <div className='main-navigation'>
            <Link to='/about'><h1>About</h1></Link>
          </div>
          <div className='main-navigation'>
            <Link to='/team'><h1>Team</h1></Link>
          </div>
          {/* <div className='main-navigation'> */}
            {/* <Link to='#contact'><h2>Contact</h2></Link> */}
          {/* </div> */}
      </nav>
    )
}

export default Header