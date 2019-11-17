import React from 'react'

import SingleAdvisor from '../atom/SingleAdvisor'

function Advisors(props) {
  return (
    <section id='advisors' className='wrapper'>
      {/* <div className='card-wrapper advisor'> */}
        <h2>Advisors</h2>
        <div className='col-wrapper-advisor'>
        {props.profiles.advisors.map((advisor, key) => {
          return <SingleAdvisor key={key} advisor={advisor} />
        })}
        </div>
      {/* </div> */}
    </section>
  )
}

export default Advisors;