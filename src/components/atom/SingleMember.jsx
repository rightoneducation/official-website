import React from 'react'
import ReactCardFlip from 'react-card-flip'

import Front from '../atom/Front'
import Back from '../atom/Back'
import LinkedIn from '../../images/linkedin-icon.svg'

function SingleMember (props) {
  const {name, linkedIn, photo, title, favoriteShow, favoriteMistake, isFlipped} = props.profile
  const { handleFlip } = props  
  return(
      <div className='card profile-card'>
            <div className='title wrapper'>
              <h2 style={{fontStyle: 'italic', marginBottom:'unset'}}>
              {name} 
              <a target="_blank" href={linkedIn}>  
              <img src={LinkedIn} width='20px' height='20px' style={{margin: '0 0 -2px 6px'}}/>
              </a>
              </h2>
            </div>
            <div className='title job-title'>
              <h4 style={{fontWeight: '300'}}>{title}</h4>
            </div>
            <ReactCardFlip isFlipped={isFlipped}>
              <Front photo={photo} handleFlip={handleFlip}/>
              <Back favMistake={favoriteMistake} favShow={favoriteShow} handleFlip={handleFlip}/>
            </ReactCardFlip>
      </div>
  )
}

export default SingleMember;