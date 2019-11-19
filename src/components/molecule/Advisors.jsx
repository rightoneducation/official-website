import React from 'react'

import SingleAdvisor from '../atom/SingleAdvisor'

function Advisors(props) {
  return (
    <section id='advisors'>
      <div className='advisor'>
        <h1>Advisors</h1>
        <div className='wrapper' style={{alignItems: 'flex-start'}}>
        {props.profiles.advisors.map((advisor, key) => {
          return <SingleAdvisor key={key} advisor={advisor} />
        })}
        </div>
      </div>
    </section>
  )
}

export default Advisors;