import React from 'react'

function singleFeature (props) {
  const {title, featureIcon, description} = props.feature
  return(
      <div className='single-col'>
        <div className='feature-images'>
          <center><img src={featureIcon} width='100%' className="App-logo" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
        </div>
        <h4 className='feature-title'>{title}</h4>
        <p>{description}</p>
      </div>
  )
}

export default singleFeature;