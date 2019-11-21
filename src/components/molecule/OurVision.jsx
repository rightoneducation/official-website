import React from 'react'

import image from '../../images/students-pointing-at-screen.jpg'

function OurVision () {
    return (
      <section className='top-section' id='vision'>
        <div className='banner-image'>
          <img  src={image} alt='right-on-education-vision' width='100%' align='top' />
        </div>
        <div className='page-intro'>
          <h1>Our Vision</h1>
        <div className='page-intro-content'>
          <p>
          In the future, we envision <b><em>RightOn!</em></b> to become a multi-channel learning platform (spanning mobile apps, livestream video, and TV), one that eventually helps connect students of all ages and backgrounds to learn new subjects – from math today to others in the future.
          </p>
          </div>
        </div>
      </section>
    )
}

export default OurVision;