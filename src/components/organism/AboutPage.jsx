import React from 'react'
import OurVision from '../molecule/OurVision'
import Quote from '../atom/Quote'
import CultureOfError from '../atom/CultureOfError'
import MyFavNo from '../atom/MyFavNo'
import IntroToTeam from '../atom/IntroToTeam'

function AboutPage () {
    return (
      <div>
        <OurVision/>
        <Quote/>
        <CultureOfError/>
        <MyFavNo/>
        <IntroToTeam/>
      </div>
    )
}

export default AboutPage;