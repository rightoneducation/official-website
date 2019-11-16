import React from 'react'
import {Image, Segment, Grid} from 'semantic-ui-react'

import bored from 'images/student-looking-bored.jpg'
import xIcon from 'images/straight_blue_X_icon.svg';

function ProblemSection () {
    return (
      <section className='problem'>
        <Grid cloumns={2} stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={bored} width='100%'/>   
            </Grid.Column>
            <Grid.Column width={10}  className='problem-card'>
              {/* <div className='problem-card'> */}
              <h3>The Problem</h3>
              <p>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</p>
            {/* </div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </section>
    )
}

export default ProblemSection;