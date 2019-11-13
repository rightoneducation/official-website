import React from 'react'

function Header () {
    return (
      <header className='grid-d-12 grid-m-12'>
          <div className='main-navigation'><a href='/'><h4>Home</h4></a></div>
          <div className='main-navigation'><a href='/about-us'><h4>About</h4></a></div>
          <div className='main-navigation'><a href='/team'><h4>Team</h4></a></div>
          <div className='main-navigation'><a href='/contact'><h4>Contact</h4></a></div>
      </header>
    )
}

export default Header

// grid-tl-12 grid-d-12 grid-m-12