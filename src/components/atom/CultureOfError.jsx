import React from 'react'
import { Form, Segment, TransitionablePortal } from 'semantic-ui-react'
import {VelocityComponent, VelocityTransitionGroup } from 'velocity-react'

import ExpandInfo from './ExpandInfo'

import expandBtn from '../../images/expand-button.png'
import image from '../../images/believe-in-yourself.jpg'

function CultureOfError (props) {
    const {animation, duration, expanded, handleExpand} = props
    return(
        <section id='culture-of-error' style={{padding: '0px'}}>
            <div className='flex-box'>
                <div className='grid-8' style={{background: 'grey'}}>
                    <img src={image} width='100%'/>
                </div>
                {/* <button id='expand' style={{position: 'absolute'}}>
                    <img src={expandBtn}/>
                </button> */}
                {/* <VelocityTransitionGroup 
                    enter={{animation: 'slideDown', duration: {duration}}} 
                    leave={{animation: 'slideUp',duration: {duration}}}
                    > */}
                {/* {expanded ? <ExpandInfo /> :  */}
                <div className='slide-card grid-4'>
                    <h2>
                    Positive Culture of Error
                    </h2>
                    <p>
                        RightOn! creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment.
                    </p>
                {/* <button onClick={handleExpand}>Click</button> */}
                </div>
                {/* </VelocityTransitionGroup> */}
                </div>
              {/* </div> */}
        </section>
    )
}

export default CultureOfError;