import React from 'react'

import logo from 'righton.svg'
import background from '../../images/header-background.svg'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <header className='page-header'>
        <div className='header-elements'>
          <div id='header-element-1'></div>
          <div id='header-element-2'></div>
          <div id='header-element-3'></div>
        </div>
        <div className="wrapper header-element-4" >
            <div className='grid-d-5'>
              <a href='/'><img src={logo} alt="right on education logo" width='100%' /></a> 
            </div>
          <div className='combined-boxes grid-d-7 grid-m-12'>
            <div className='sub-headline'>
              <h1 style={{fontWeight: '300'}}>Unlocking every student’s potential in math!</h1>
            </div>
            <MainNav />
          </div>
        </div>
      </header>
    )
}
  
export default PageHeader;