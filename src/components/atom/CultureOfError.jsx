import React from 'react'

import expandBtn from '../../images/expand-button.png'

function CultureOfError () {
    return(
        <section id='culture-of-error' style={{padding: '0px'}}>
            <div className='flex-box'>
                <div className='grid-8' style={{background: 'grey'}}>
                    <img src='' width='100%'/>
                </div>
                {/* <button id='expand' style={{position: 'absolute'}}>
                    <img src={expandBtn}/>
                </button> */}
                <div className='slide-card grid-4'>
                    <h2>
                    Positive Culture of Error
                    </h2>
                    <p>
                        RightOn! creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment. Click the expand button to find out more!
                    </p>
                </div>
              </div>
        </section>
    )
}

export default CultureOfError;