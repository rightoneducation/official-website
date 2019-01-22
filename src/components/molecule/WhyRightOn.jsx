import React from 'react'

import diversity from 'images/diversity-placeholder-image.jpg'
import unsplash_1 from 'images/unsplash-1.jpg'
import unsplash_2 from 'images/unsplash-2.jpg'
import circle from 'images/circle_icon.svg';

import SingleWhy from '../atom/SingleWhy'

function WhyRightOn(props) {
  return (
    <div className='card-wrapper-normal'>
      <h2>
        <img src={circle} className='about-icons' width='10%' alt='product feature' />Why <b><em>RightOn!</em></b>
        </h2>
      <h3 className='h3-normal-weight'>
        <b><em>RightOn!</em></b> is a free game show app that makes math more fun for middle and high school students.
        </h3>
      <div className='why-righton-wrapper'>
        {props.valueprops.map((valueprop, key) => {
          return <SingleWhy key={key} valueprop={valueprop} />
        })}
      </div>
    </div>
  )
}

export default WhyRightOn;