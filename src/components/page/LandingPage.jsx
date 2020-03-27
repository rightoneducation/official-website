import React from 'react'
import { Box } from "@material-ui/core";
import ProductFeatures from './node_modules/components/molecule/ProductFeatures'
import OurMission from './node_modules/components/molecule/OurMission'
import WhyRightOn from './node_modules/components/molecule/WhyRightOn'
import ProblemSection from './node_modules/components/molecule/ProblemSection'

import featureData from './node_modules/_localDb/features'

function LandingPage () { 
    return (
        <Box>
            <OurMission />
            <ProblemSection />           
            <WhyRightOn valueprops={featureData.whyRightOn}/>
            <ProductFeatures features={featureData}/>
        </Box>
    )
}

export default LandingPage;