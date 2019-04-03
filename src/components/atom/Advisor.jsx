import React from 'react'

function Advisor (props) {
  const {name, photo, profile,title} = props.advisor
  return (
      <div className='single-advisor-profile'>
        <img src={photo} className='profile-photo-advisors' alt='' />
          <div>
            <h3 className='h2-light'>{name}</h3>
            <h5>{title}</h5>
          </div>
          <p>{profile}</p>
      </div>
  )
}

export default Advisor;