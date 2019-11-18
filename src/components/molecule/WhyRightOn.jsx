import React from 'react'

import SingleWhy from '../atom/SingleWhy'

import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  return (
    <section id='why-righton'>
        <div className='section-heading'>
          <h1 style={{textAlign:'center'}}>
            Why <b><em>RightOn!</em></b>
          </h1>
        </div>
        <div className='wrapper'> 
        {/* <div className='why-righton-card'>
          box1
        </div>
        <div className='why-righton-card'> 
          <img src={iphonemockup} width='100%'/>
        </div>
        <div className='why-righton-card'>
          <div>box3</div>
          <div>box4</div>
        </div> */}
          {props.valueprops.map((valueprop, key) => {
            return <SingleWhy key={key} singleWhy={valueprop} />
          })}           
          {/* <div className='grid-6>
          <img src={iphonemockup} width='50%'/>
          </div> */}
        </div>
    </section>
  )
}

export default WhyRightOn;
