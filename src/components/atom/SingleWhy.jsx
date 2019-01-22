import React from 'react'

function singleWhy(props) {
  const { title, featureImage, description } = props.valueprop
  return (
     <div className='why-righton-wrapper'>
        <div className='list-image'>
          <img src={featureImage} alt="CHANGE IMAGE" width='100%' />
        </div>
        <div className='why-righton-list'>
          <h3>
            <b>{title}</b>
            </h3>
          <p className='list-description'>{description}
          </p>
        </div>
      </div>
  )
}

export default singleWhy;