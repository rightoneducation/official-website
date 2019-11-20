import React from 'react'

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
     <div className='card why-righton-card flex-box'>
        <div className='card-image grid-d-6 grid-m-12'>
          <img src={featureImage} alt='right-on-education-product-features' width='100%'/>
        </div>
        <div className='card-content grid-d-6 grid-m-12'>
          <h3 style={{marginBottom: '20px', paddingBottom: '5px', borderBottom: '2px solid red'}}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default singleWhy;

