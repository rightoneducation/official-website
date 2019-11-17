import React from 'react'

import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <section id='features'>
        <div>
          <h1 id='section-heading' style={{textAlign:'center', color:'white'}}>Product Features</h1>
        </div>
        <div className='wrapper'>
          {props.features.features.map((feature, key) => { return <SingleFeature key={key} feature={feature} />
          })}
        </div> 
      </section>
    )
}

export default ProductFeatures;