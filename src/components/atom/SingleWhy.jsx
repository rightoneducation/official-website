import React from 'react'

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
     <div className='card why-righton-card grid-d-3 grid-m-12'>
        <div className='card-image'>
          <img src={featureImage} alt='right-on-education-product-features' width='100%'/>
        </div>
        <div className='card-content'>
          <h3 style={{marginBottom: '20px'}}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default singleWhy;