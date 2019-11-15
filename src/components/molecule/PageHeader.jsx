import React from 'react'
import { Segment } from 'semantic-ui-react'
 

import logo from 'righton.svg'
import iphonemockup from 'images/app-iphone-mockup.png'

import MainNav from './MainNav'

function PageHeader () {
    return (
      <Segment as='section' style={{backgroundColor: 'black'}}>
        <div className="wrapper">
            <div className='logo grid-d-5'>
              <a href='/'><img src={logo} alt="right on education logo" width='100%' /></a> 
            </div>
          <div className='combined-boxes grid-d-7'>
            <MainNav />
            <div className='sub-headline'>
              <h3 className='mobile-landing'>Unlocking every student’s potential in math!</h3>
            </div>
          </div>
        </div>
      </Segment>
    )
}
  
export default PageHeader;