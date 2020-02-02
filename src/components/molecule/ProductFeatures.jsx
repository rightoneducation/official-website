import React from 'react'

import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <section id='features'>
        <div className='section-heading half-circle'>
          <h1 id='section-heading' style={{textAlign:'center', color:'white', fontSize:'3em'}}>Product Features</h1>
        </div>
        <div className='wrapper'>
          {props.features.features.map((feature, key) => { return <SingleFeature key={key} feature={feature} />
          })}
        </div> 
      </section>
    )
}

export default ProductFeatures;