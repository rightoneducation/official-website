import React from 'react'
import OurVision from '../organisms/OurVision'
import Quote from '../atoms/Quote'
import CultureOfError from '../molecules/CultureOfErrorSection'
import MyFavNo from '../molecules/MyFavNoSection'
import IntroToTeam from '../molecules/IntroToTeam'

function AboutPage (props) {
  const { styles } = props
    return (
      <div>
        <OurVision styles={styles}/>
        <Quote/>
        <CultureOfError />
        <MyFavNo />
        <IntroToTeam/>
      </div>
    )
}

export default AboutPage;