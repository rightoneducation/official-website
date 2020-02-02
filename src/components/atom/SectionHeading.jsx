import React from 'react'

function SectionHeading () {
    return(
        <div className='section-heading flex-box'>
          <div className='divider grid-d-3 grid-tl-3 grid-t-3 grid-m-12'></div>
          <div className='grid-d-6 grid-tl-6 grid-t-6'>
          <h1 style={{fontWeight: '400', textAlign:'center', fontSize:'3em', margin: '0 20px', flexFlow: 'inherit'}}>
            Why <b><em>RightOn!</em></b>
          </h1>
          </div>
          <div className='divider grid-d-3 grid-tl-3 grid-t-3 grid-m-12'></div>
        </div>
    )
}

export default SectionHeading;