import React from 'react'

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
      <div className='card grid-d-3 grid-t-12 grid-m-12' style={{color: 'white'}}>
        <div className='feature-items'>
          <center><img src={featureIcon} width='100%' id="feature-graphic" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
        </div>
        <h3 style={{marginBottom: '20px'}}>{title}</h3>
        <p>{description}</p>
      </div>
  )
}

export default singleFeature;