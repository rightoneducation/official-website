import React from 'react'

function Advisor (props) {
  const {name, photo, profile,title, linkedIn} = props.advisor
  return (
      <div className='grid-d-5 single-advisor-profile'>
        <a href={linkedIn}><img src={photo} className='profile-photo-advisors' alt='' /></a>
          <div>
            <h2 style={{fontWeight: '300'}}>{name}</h2><span><h5 style={{marginBottom:'10px'}}>{' | '}{title}</h5></span>
          <div>
            <p>{profile}</p>
          </div>
          </div>
      </div>
  )
}

export default Advisor;