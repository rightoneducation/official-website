import React from 'react'

import SectionHeading from '../atom/SectionHeading'
import SingleWhy from '../atom/SingleWhy'

import iphonemockup from 'images/app-iphone-mockup.png'

function WhyRightOn(props) {
  // const { title, featureImage, description } = props.valueprops
  return (
    <section id='why-righton'>
        <SectionHeading />
        <div className='flex-box' style={{justifyContent:'space-around'}}> 
          <div className='grid-d-7'>
          {props.valueprops.map((valueprop, key) => {
            return <SingleWhy key={key} singleWhy={valueprop} />
          })}    
          </div>
          <div className='grid-d-2 grid-t-3 grid-m-3' style={{alignSelf:'center'}}> 
            <img src={iphonemockup} width='100%'/>
          </div>
          {/* <div className='grid-d-3 why-righton-card'>
          <SingleWhy singleWhy={props.valueprops}/>
          <SingleWhy singleWhy={props.valueprops}/>
          </div> */}
        </div>
    </section>
  )
}

export default WhyRightOn;




         