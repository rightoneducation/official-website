import React from 'react'
import OurVision from '../organisms/OurVision'
import AboutCards from '../organisms/AboutCards'
import AboutValues from '../molecules/AboutValues'

import featureData from '../../_localDb/features'

import GoToTop from '../../GoToTop'
import AboutPageShapes from '../organisms/AboutPageShapes'

function AboutPage() {
  const { ourValues, aboutCards, styles } = featureData
  console.log(featureData)
  return (
    <div style={{background: "linear-gradient(180deg, #322759 -2.67%, #40216F 64.71%, #591796 100%)", position:"relative"}}>
    <AboutPageShapes/>
    <div style={{  position: "relative", zIndex: "1" }}>
      <OurVision />
      <AboutValues ourValues={ourValues} />
      <AboutCards aboutCards={aboutCards} />
    <GoToTop/>
    </div>
    </div>
  )
}

export default AboutPage;