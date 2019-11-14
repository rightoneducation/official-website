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
          <Message.Header as='h2'><Image src={whitehash} width='10%' className='about-icons' alt='mission' />Our Vision</Message.Header>
          <Message.Content>
          In the future, we envision RightOn! to become a multi-channel learning platform (spanning mobile apps, livestream video, and TV), one that eventually helps connect students of all ages and backgrounds to learn new subjects – from math today to others in the future.
          </Message.Content>
        </Message>
      </Segment>
      <Segment>
          <Message.Header as='h2' textAligh='centered'>
              "The most valuable thing you can make is a mistake - you can't learn anything from being perfect." 
            </Message.Header>
      </Segment>
      <Segment className='quote'>
          <Message.Header as='h2' textAligh='centered'>
             Positive Culture of Error
            </Message.Header>
            <Message.Content>
                RightOn! creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment. Click the expand button to find out more!
            </Message.Content>
      </Segment>
      <Segment>
          <Message.Header as='h2' textAligh='centered'>
              "My Favorite No"
            </Message.Header>
            <Message.Content>
                “My Favorite No” and other similar activities that math teachers use to foster a positive culture of error have been both a foundation and inspiration for RightOn!. Click the expand button to find out more and check out the video!
            </Message.Content>
      </Segment>
      <Segment>
            <Message.Content>
            We are a diverse group of people who are passionate about education and technology!
            </Message.Content>
            <Button>Meet the Team</Button>
      </Segment>
      </Segment.Group>
    )
}

export default TeamPage;