import React from 'react'

import logo from 'righton.svg'
import background from 'images/header-background.svg'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <div className='page-header'>
        {/* <img src={background} /> */}
        <div className="wrapper">
            <div className='logo'>
              <a href='/'><img src={logo} alt="right on education logo" width='100%' /></a> 
            </div>
          <div className='combined-boxes grid-d-7'>
            <MainNav />
            <div className='sub-headline'>
              <h3>Unlocking every student’s potential in math!</h3>
            </div>
          </div>
        </div>
      </div>
    )
}
  
export default PageHeader;