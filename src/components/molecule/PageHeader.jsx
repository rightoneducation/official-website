import React from 'react'

import logo from 'righton.svg'
import background from '../../images/header-background.svg'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <header className='page-header'>
        {/* <img src={background} width='100%' style={{ position: 'absolute', mixBlendMode: 'multiply' }} /> */}
        <div className="wrapper">
            <div className='grid-d-5'>
              <a href='/'><img src={logo} alt="right on education logo" width='100%' /></a> 
            </div>
          <div className='combined-boxes grid-d-7 grid-m-12'>
            <MainNav />
            <div className='sub-headline'>
              <h1 style={{fontWeight: '300'}}>Unlocking every student’s potential in math!</h1>
            </div>
          </div>
        </div>
      </header>
    )
}
  
export default PageHeader;