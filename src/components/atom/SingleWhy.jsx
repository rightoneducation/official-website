import React from 'react'

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
     <div className='why-righton-card grid-4 grid-m-6'>
        <div className='card-image'>
          <img src={featureImage} alt='right-on-education-product-features' width='100%' />
        </div>
        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default singleWhy;