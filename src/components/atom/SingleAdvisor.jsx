import React from 'react'

function Advisor (props) {
  const {name, photo, profile,title, linkedIn} = props.advisor
  return (
      <div className='grid-d-5 single-advisor-profile'>
        <a href={linkedIn} target='_blank'><img src={photo} className='profile-photo-advisors' alt='' /></a>
          <div className='advisor-info'>
            <h2 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h2>
            <h5 className='high-light'>{title}</h5>
          <div>
            <p>{profile}</p>
          </div>
          </div>
      </div>
  )
}

export default Advisor;