import React from 'react'

import placeholder from 'images/diversity-placeholder-image.jpg'

function OurMission () {
    return (
      <section id='mission' className='top-section'>
        <div className='banner-image' style={{objectFit: 'contain', objectPosition:'center'}}>
          <img src={placeholder} width='100%'/>
        </div>
        <div className='page-intro'>
            <h1>Mission</h1>
          <div className='page-intro-content'>
            <p>
            Our mission is to make math more fun for middle and high school students, increasing both motivation and self-confidence. Not a big fan of math? Great, <b><em>RightOn!</em></b> is the game for you. Already like math? That’s cool too, you’ll like it even more!
            </p>
          </div>
        </div>
      </section>
    )
}

export default OurMission;