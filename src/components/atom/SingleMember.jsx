import React from 'react'
import ReactCardFlip from 'react-card-flip'

import Front from './Front'
import Back from './Back'

import LinkedIn from '../../images/linkedin-icon.svg'

function singleMember (props) {
  const {name, linkedIn, photo, title, favoriteShow, favoriteMistake} = props.member
  const { isFlipped, handleClick } = props

  return(
      <div className='card profile-card'>
            {/* <div className='dark isolate'> */}
            <div className='title wrapper'>
              <h1 style={{fontStyle: 'italic', marginBottom:'unset'}}>
              {name} 
              <a href={linkedIn}>  
                <img src={LinkedIn} width='20px' height='20px' style={{margin: '0 0 -2px 6px'}}/>
              </a>
              </h1>
            </div>
            <div className='title job-title'>
              <h4 style={{fontWeight: '300'}}>{title}</h4>
            </div>
            <ReactCardFlip isFlipped={isFlipped}>
              <Front photo={photo} handleClick={handleClick}/>   
              <Back favMistake={favoriteMistake} favShow={favoriteShow} handleClick={handleClick}/>
            </ReactCardFlip> 
            {/* </div>          */}
      </div>
  )
}

export default singleMember;