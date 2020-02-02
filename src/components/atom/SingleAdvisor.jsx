import React from 'react'

function Advisor (props) {
  const {name, photo, profile,title, linkedIn} = props.advisor
  return (
      <div className='grid-d-6 single-advisor-profile'>
        <div className='advisor-info'>
          <div>
          <a href={linkedIn} target='_blank'><img src={photo} className='profile-photo-advisors' alt='' /></a>
          </div>
          <div>
          <h3 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h3>
            <h5 className='high-light'>{title}</h5>
          </div>
        </div>
          <div>
            <p style={{fontSize: '.9rem'}}>{profile}</p>
          </div>
      </div>
  )
}

export default Advisor;