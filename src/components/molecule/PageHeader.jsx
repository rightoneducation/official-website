import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
 

import logo from 'righton.svg'
import background from 'images/header-background.svg'
import iphonemockup from 'images/app-iphone-mockup.png'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <div className='page-header'>
        {/* <Image src={background} size='massive' fluid/> */}
        <div className="wrapper">
            <div className='logo'>
              <a href='/'><Image src={logo} alt="right on education logo" width='100%' /></a> 
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