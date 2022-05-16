import React from 'react'
import OurVision from '../organisms/OurVision'
import CultureOfError from '../molecules/CultureOfErrorSection'
import MyFavNo from '../molecules/MyFavNoSection'
import AboutValues from '../molecules/AboutValues'

import featureData from '../../_localDb/features'

function AboutPage () {
  const {ourValues} = featureData
  console.log(featureData)
    return (
      <div style={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)"}}>
        <OurVision/>
        <AboutValues ourValues={ourValues}/>
        <CultureOfError />
        <MyFavNo />
      </div>
    )
}

export default AboutPage;