import React from 'react'
import { Image, Message, Segment, Button } from 'semantic-ui-react'

import whitehash from 'images/hash_W_icon.svg';

function TeamPage () {
    return (
        <Segment.Group>
        <Segment as='section' className='mission-section' id='our-mission'>
        <div className='mission-image grid-d-12'>
          <Image src='images/diversity-placeholder-image.jpg' />
        </div>
        <Message className='mission-card'>
          <Message.Header as='h2'><Image src={whitehash} width='10%' className='about-icons' alt='mission' />Values</Message.Header>
          <Message.Content>
          We’re a team that sometimes falls down, always gets back up, and never stops having fun.
          Trust and open communication: seeking to understand, then to be understood
          Integrity: doing the right thing
          Compassion: lending a hand to others, giving back, expressing gratitude
          Humility: working together on something bigger than ourselves
          Beginner’s mindset: going into things with an open mind, always learning and making new mistakes
          Fun: having fun along the way!
          </Message.Content>
        </Message>
      </Segment>
      <Segment className='quote'>
          <Message.Header as='h2' textAligh='centered'>
              Meet The Team 
            </Message.Header>
      </Segment>
      <Segment >
          <Message.Header as='h2' textAligh='centered'>
             Advisors
            </Message.Header>
            <Message.Content>
                RightOn! creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment. Click the expand button to find out more!
            </Message.Content>
      </Segment>
      </Segment.Group>
    )
}

export default TeamPage;