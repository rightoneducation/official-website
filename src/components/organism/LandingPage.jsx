import React from 'react'

import ProductFeatures from 'components/molecule/ProductFeatures'
import OurMission from 'components/molecule/OurMission'
import WhyRightOn from 'components/molecule/WhyRightOn'
import ProblemSection from 'components/molecule/ProblemSection'

import featureData from '_localDb/features'

function LandingPage () { 
    return (
        <div>
        <OurMission />
        <ProblemSection />           
        <WhyRightOn valueprops={featureData.whyRightOn}/>
        <ProductFeatures features={featureData}/>
        </div>
    )
}

export default LandingPage;