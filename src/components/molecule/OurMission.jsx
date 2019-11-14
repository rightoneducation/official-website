import React from 'react'
import { Image, Message, Segment } from 'semantic-ui-react'

import whitehash from 'images/hash_W_icon.svg';


function OurMission () {
    return (
      <Segment as='section' className='mission-section' id='our-mission'>
        <div className='mission-image grid-d-12'>
          <Image src='images/diversity-placeholder-image.jpg' />
        </div>
        <Message className='mission-card'>
          <Message.Header as='h2'><Image src={whitehash} width='10%' className='about-icons' alt='mission' />Mission</Message.Header>
          <p>
          Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <b><em>RightOn!</em></b> is the game for you. Already like math? That’s cool too, you’ll like it even more!
          </p>
        </Message>
      </Segment>
    )
}

export default OurMission;