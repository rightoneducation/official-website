import React from 'react'

import diversity from '../../images/diversity-placeholder-image.jpg'
import unsplash_1 from '../../images/unsplash-1.jpg'
import unsplash_2 from '../../images/unsplash-2.jpg'
import circle from '../../images/circle_icon.svg';

function WhyRightOn() {
  return (
    <div className='card-wrapper-normal'>
      <h2><img src={circle} className='about-icons' width='10%' alt='product feature' />Why <b><em>RightOn!</em></b></h2>
      <h3 className='h3-normal-weight'><b><em>RightOn!</em></b> is a free game show app that makes math more fun for middle and high school students.</h3>
      <div className='why-righton-wrapper'>
        <div className='list-image'>
          <img src={unsplash_1} alt="CHANGE IMAGE" width='100%' />
        </div>
        <div className='why-righton-list'>
          <h3><b>Increasing educational equity in STEM</b></h3>
          <p className='list-description'>The same high-quality, fun version of <b><em>RightOn!</em></b> is available for all students – no matter your school, zip code, or how much you even like math.</p>
        </div>
      </div>
      <div className='why-righton-wrapper'>
        <div className='list-image'>
          <img src={unsplash_2} alt="CHANGE IMAGE" width='100%' />
        </div>
        <div className='why-righton-list'>
          <h3><b>Fostering mathematical mindsets</b></h3>
          <p className='list-description'>Everyone can get better at math, especially when you try. We focus on wrong answers rather than right ones, so anyone who has ever come up with a wrong answer can play this game!</p>
        </div>
      </div>
      <div className='why-righton-wrapper'>
        <div className='list-image'>
          <img src={diversity} alt="CHANGE IMAGE" width='100%' />
        </div>
        <div className='why-righton-list'>
          <h3><b>Having fun with math</b></h3>
          <p className='list-description'><b><em>RightOn!</em></b> is not just any game, it’s a game show where you can play in teams and win prizes – real ones!</p>
        </div>
      </div>
    </div>
  )
}

export default WhyRightOn;