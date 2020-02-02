import React from 'react'

import ExpandInfo from './ExpandInfo'

import expandBtn from '../../images/expand-button.png'
import image from '../../images/believe-in-yourself.jpg'

function CultureOfError (props) {
    // const {animation, duration, expanded, handleExpand} = props
    return(
        <section id='culture-of-error' style={{padding: '0px'}}>
            <div className='slide-card flex-box'>
                <div className='slide-image grid-d-8'>
                    <img src={image} width='100%'/>
                </div>
                <div className='slide-content grid-d-4'>
                    <h2>
                    Positive Culture of Error
                    </h2>
                    <p>
                    <b><em>RightOn!</em></b> creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment.
                    </p>
                </div>
                </div>
        </section>
    )
}

export default CultureOfError;