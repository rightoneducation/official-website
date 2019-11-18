import React from 'react'

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
     <div className='why-righton-card grid-d-3 grid-3 grid-m-12'>
        <div className='card-image'>
          <img src={featureImage} alt='right-on-education-product-features' width='100%' align='middle'/>
        </div>
        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default singleWhy;