import React from 'react'

function Advisor (props) {
  const {name, photo, profile} = props.advisor
  return (
      <div className='single-profile'>
        <img src={photo} className='profile-photo-advisors' alt='' />
          <h3 className='h2-light'>{name}</h3>
          {/* <h5>Math Instructional Coach</h5> */}
          <p>{profile}</p>
      </div>
  )
}

export default Advisor;