import React from 'react'
import ReactCardFlip from 'react-card-flip'
// import ReactCardFlip from 'react-card-flip';

import Front from './Front'
import Back from './Back'
import { is } from '@babel/types'

function singleMember (props) {
  const {name, photo, title, favoriteShow, favoriteMistake} = props.member
  const { isFlipped, handleClick } = props

  return(
      <div className='card profile-card '>
            <div className='dark isolate'>
            <div className='title'>
              <h2 style={{fontStyle: 'italic'}}>{name}</h2>
            </div>
            <div className='title job-title'> 
              <h4 style={{fontWeight: '300'}}>{title}</h4>
            </div>
            <ReactCardFlip isFlipped={isFlipped}>
              <Front photo={photo} handleClick={handleClick}/>   
              <Back favMistake={favoriteMistake} favShow={favoriteShow} handleClick={handleClick}/>
            </ReactCardFlip>
            </div>
          
      </div>
  )
}

export default singleMember;