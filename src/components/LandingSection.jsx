import React from 'react'
import righton from '../righton.svg'
import iphonemockup from '../images/app-iphone-mockup.png'

import Header from './molecule/Header'

function LandingSection () {
    return (
      <section id='landing' className='landing'>
        <Header />
        <div className="logo-branding">
          <center><a href='/'><img src={righton} alt="logo" width='90%' /></a></center>
          <div className='product-msg'>
            <h3 className='mobile-landing'>Fun and motivation first – <b><em>RightOn!</em></b> is a math game show app for students to learn from and even win with wrong answers!</h3>
          </div>
        </div>
        <div className='product-image'>
          <img src={iphonemockup} width='100%' alt='RightOn! – A fun math game show app for high school students!' />
        </div>
      </section>
    )
}
  
export default LandingSection;