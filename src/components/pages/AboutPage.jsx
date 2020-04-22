import React from 'react'
import OurVision from '../molecule/OurVision'
import Quote from '../atom/Quote'
import CultureOfError from '../atom/CultureOfError'
import MyFavNo from '../atom/MyFavNo'
import IntroToTeam from '../atom/IntroToTeam'

function AboutPage (props) {
  const { styles } = props
    return (
      <div>
        <OurVision styles={styles}/>
        <Quote/>
        <CultureOfError {...props}/>
        <MyFavNo {...props}/>
        <IntroToTeam/>
      </div>
    )
}

export default AboutPage;