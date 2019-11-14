import React from 'react'
import { Segment, Header, Grid} from 'semantic-ui-react'


import xIcon from 'images/magenta_straight_X_icon.svg';

import SingleFeature from '../atom/SingleFeature'

function ProductFeatures (props) {
    return (
      <Segment as='section' id='features' style={{backgroundColor: 'red'}}>
          <Header as='h1' block image={xIcon} content='Product Features' textAlign='centered'></Header>
          <Grid cloumns={3} fluid>
          <Grid.Row>
                {props.features.features.map((feature, key) => { return <Grid.Column width={5}><SingleFeature key={key} feature={feature} />
                </Grid.Column>
              })}           
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default ProductFeatures;