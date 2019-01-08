import React from 'react'

import Mission from './molecule/Mission'
import WhyRightOn from './molecule/WhyRightOn'
import Advisors from './molecule/Advisors'

function AboutUs () {
    return (
      <div className='patterned-background'>
        <Mission />
        <WhyRightOn />
        <Advisors />
      </div>
    )
}

export default AboutUs;