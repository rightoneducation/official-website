import React from 'react'

import SingleWhy from '../atom/SingleWhy'

import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  return (
    <section id='why-righton'>
        <div className='section-heading flex-box'>
          <div className='divider grid-d-3 grid-tl-3 grid-t-3 grid-m-12'></div>
          <div className='grid-d-6 grid-tl-6 grid-t-6'>
          <h1 style={{textAlign:'center', fontSize:'3em', margin: '0 20px', flexFlow: 'inherit'}}>
            Why <b><em>RightOn!</em></b>
          </h1>
          </div>
          <div className='divider grid-d-3 grid-tl-3 grid-t-3 grid-m-12'></div>
        </div>
        
        <div className='wrapper'> 
          {props.valueprops.map((valueprop, key) => {
            return <SingleWhy key={key} singleWhy={valueprop} />
          })}           
        </div>
    </section>
  )
}

export default WhyRightOn;


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
        
         {/* <div className='grid-6>
          <img src={iphonemockup} width='50%'/>
          </div> */}