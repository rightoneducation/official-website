import React from 'react'
import OurVision from '../organisms/OurVision'
import Quote from '../atoms/Quote'
import CultureOfError from '../molecules/CultureOfErrorSection'
import MyFavNo from '../molecules/MyFavNoSection'
import IntroToTeam from '../molecules/IntroToTeam'
import OurMission from '../organisms/OurMission'

function AboutPage (props) {
  const { styles } = props
    return (
      <div style={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)"}}>
        <OurVision styles={styles}/>
        {/* <OurMission styles={styles}/> */}
        {/* <Quote/> */}
        <CultureOfError />
        <MyFavNo />
        {/* <IntroToTeam/> */}
      </div>
    )
}

export default AboutPage;