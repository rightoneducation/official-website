import React from 'react'

import SingleAdvisor from '../atom/SingleAdvisor'

function Advisors({advisorProfiles}) {
  console.log(advisorProfiles)
  return (
    <section id='advisors'>
      <div>
        <h1>Advisors</h1>
      </div>
      <div className='flex-box advisor'>
        <div className='wrapper' style={{alignItems: 'flex-start', justifyContent:'space-between'}}>
        {advisorProfiles.map((advisor, index) => {
          return <SingleAdvisor key={index} advisor={advisor} />
        })}
        </div>
      </div>
    </section>
  )
}

export default Advisors;