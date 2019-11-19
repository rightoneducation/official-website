import React from 'react'

import image from '../../images/students-pointing-at-screen.jpg'

function OurVision () {
    return (
        <section className='top-section' id='vision'>
        <div className='banner-image grid-d-12'>
          <img  src={image} alt='right-on-education-vision' width='100%' align='middle' />
        </div>
        <div className='page-intro'>
        <div className='page-intro-content'>
          <h2>Our Vision</h2>
          <p style={{ 
              borderLeft: '3px solid rgb(216, 0, 83)', paddingLeft: '20px'
              }}>
          In the future, we envision RightOn! to become a multi-channel learning platform (spanning mobile apps, livestream video, and TV), one that eventually helps connect students of all ages and backgrounds to learn new subjects – from math today to others in the future.
          </p>
          </div>
        </div>
      </section>
    )
}

export default OurVision;