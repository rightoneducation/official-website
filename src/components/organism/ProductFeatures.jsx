import React from 'react'

import xIcon from 'images/magenta_straight_X_icon.svg';

import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <section id='features' className='product-features'>
        <div className='section-intro'>
          <h2><img src={xIcon} width='8%' className='about-icons' alt='product feature' />
          Product Features</h2>
        </div>
        <div className='col-wrapper grid-d-8'>
          {props.features.features.map((feature, key) => {
            return <SingleFeature key={key} feature={feature} />
          })}
        </div>
      </section>
    )
}

export default ProductFeatures;