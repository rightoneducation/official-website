import React from 'react'
import { Segment, Image, Header, Grid } from 'semantic-ui-react'

import diversity from 'images/diversity-placeholder-image.jpg'
import unsplash_1 from 'images/unsplash-1.jpg'
import unsplash_2 from 'images/unsplash-2.jpg'
import circle from 'images/circle_icon.svg';

import SingleWhy from '../atom/SingleWhy'

function WhyRightOn(props) {
  return (
    <section>
        <Header as='h1' textAlign='center'>
          Why <b><em>RightOn!</em></b>
        </Header>
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