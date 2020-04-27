import React from 'react'

import ProductFeatures from 'components/organisms/ProductFeatures'
import OurMission from 'components/organisms/OurMission'
import WhyRightOn from 'components/organisms/WhyRightOn'
import ProblemSection from 'components/organisms/ProblemSection'

import featureData from '_localDb/features'

function LandingPage (props) { 
    const {styles} = props
    const { whyRightOn, productFeatures } = featureData
    return (
        <div>
        <OurMission styles={styles}/>
        <ProblemSection />           
        <WhyRightOn whyRightOn={whyRightOn}/>
        <ProductFeatures productFeatures={productFeatures}/>
        </div>
    )
}

export default LandingPage;