import React from 'react'

import SingleAdvisor from '../atom/SingleAdvisor'

function Advisors(props) {
  return (
    <section id='advisors'>
      <div>
        <h1>Advisors</h1>
      </div>
      <div className='flex-box advisor'>
        <div className='wrapper' style={{alignItems: 'flex-start', justifyContent:'space-evenly'}}>
        {props.advisorProfiles.map((advisor, key) => {
          return <SingleAdvisor key={key} advisor={advisor} />
        })}
        </div>
      </div>
    </section>
  )
}

export default Advisors;