import React from 'react'

import teamIcon from '../../images/team-icon.svg'
import placeholder from 'images/team-photo.jpg'

function OurValue () {
    return (
        <section className='top-section' id='our-values'>
        <div className='banner-image'>
          <img  src={placeholder} alt='right-on-education-vision' width='100%' align='top' />
        </div>
        <div className='page-intro'>
            <h1>Our Values</h1>
          <div className='page-intro-content'>
            <p style={{ lineHeight: '1.6em'}}>
                We’re a team that sometimes falls down, always gets back up, and never stops having fun.<br/>
                <b>Trust and open communication:</b> seeking to understand, then to be understood<br/>
                <b>Integrity:</b> doing the right thing<br />
                <b>Compassion:</b> lending a hand to others, giving back, expressing gratitude<br />
                <b>Humility:</b> working together on something bigger than ourselves<br />
                <b>Beginner’s mindset:</b> going into things with an open mind, always learning and making new mistakes<br />
                <b>Fun:</b> having fun along the way!
            </p>
          </div>
        </div>
      </section>
    )
}

export default OurValue;