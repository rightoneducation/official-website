import React from 'react'
// import { Image, Message, Segment } from 'semantic-ui-react'

import whitehash from 'images/hash_W_icon.svg';


function OurMission () {
    return (
      <section id='mission' className='top-section'>
        <div className='banner-image grid-d-12'>
          <img src='images/diversity-placeholder-image.jpg' width='100%'/>
        </div>
        <div className='page-intro'>
          <div className='page-intro-content'>
            <h2>Mission</h2>
            <p style={{ 
              borderLeft: '3px solid rgb(216, 0, 83)', paddingLeft: '20px'
              }}>
            Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <b><em>RightOn!</em></b> is the game for you. Already like math? That’s cool too, you’ll like it even more!
            </p>
          </div>
        </div>
      </section>
    )
}

export default OurMission;