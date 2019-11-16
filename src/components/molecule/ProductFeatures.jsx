import React from 'react'
import { Segment, Header, Grid} from 'semantic-ui-react'


import xIcon from 'images/magenta_straight_X_icon.svg';

import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <section id='features'>
        <h1 style={{textAlign:'center'}}>Product Features</h1>
        {props.features.features.map((feature, key) => { return <SingleFeature key={key} feature={feature} />
              })}           
      </section>
    )
}

export default ProductFeatures;