import React from 'react'
import { Segment, Image, Header, Grid } from 'semantic-ui-react'

import SingleWhy from '../atom/SingleWhy'

function WhyRightOn(props) {
  return (
    <section>
        <h1 style={{textAlign:'center'}}>
          Why <b><em>RightOn!</em></b>
        </h1>
        <Grid cloumns={3} stackable>
          <Grid.Row>
                {props.valueprops.map((valueprop, key) => {
                return <Grid.Column width={5}><SingleWhy key={key} valueprop={valueprop} />
                </Grid.Column>
              })}           
          </Grid.Row>
        </Grid>
    </section>
  )
}

export default WhyRightOn;