import React from 'react'
import OurVision from '../organisms/OurVision'
import CultureOfError from '../molecules/CultureOfErrorSection'
import MyFavNo from '../molecules/MyFavNoSection'
import OurValue from '../organisms/OurValue'

function AboutPage (props) {
  const { styles } = props
  const {ourValues} = featureData
    return (
      <div styles={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)"}}>
        <OurVision styles={styles}/>
        <OurValue ourValues={ourValues}/>
        {/* <Quote/> */}
        <CultureOfError />
        <MyFavNo />
        {/* <IntroToTeam/> */}
      </div>
    )
}

export default AboutPage;