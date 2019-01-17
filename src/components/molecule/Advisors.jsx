import React from 'react'

import hash from 'images/hash_icon.svg'

import Advisor from '../atom/Advisor'

function Advisors(props) {
  console.log(props)
  return (
    <div className='card-wrapper advisor'>
      <h2><img src={hash} className='about-icons' alt='product feature' />Advisors</h2>
      <div className='col-wrapper'>
      {props.profiles.advisors.map((advisor, key) => {
        return <Advisor key={key} advisor={advisor} />
      })}
      </div>
    </div>
  )
}

export default Advisors;