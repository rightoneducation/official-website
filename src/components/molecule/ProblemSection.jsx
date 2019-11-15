import React from 'react'
import {Image, Segment, Grid} from 'semantic-ui-react'

import bored from 'images/student-looking-bored.jpg'
import xIcon from 'images/straight_blue_X_icon.svg';

function ProblemSection () {
    return (
      <Segment as='section'>
        <Grid cloumns={2} fluid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={bored}/>   
            </Grid.Column>
            <Grid.Column width={8}>
              {/* <div className='problem-card'> */}
              <h2><Image src={xIcon} width='10%' className='about-icons' alt='product feature' />The Problem</h2>
              <h3>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</h3>
            {/* </div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default ProblemSection;