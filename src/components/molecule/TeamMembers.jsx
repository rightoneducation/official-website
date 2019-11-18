import React from 'react'

import SingleMember from '../atom/SingleMember'
import { is } from '@babel/types'

function TeamMembers (props) {
  const { isFlipped, handleClick } = props
    return (
      <section id='team'>
        <div>
          <h2>Meet the Team</h2>
        </div>
        <div className='wrapper'>
          {props.profiles.devTeam.map((member, key) => {
            return <SingleMember key={key} member={member} isFlipped={isFlipped} handleClick={handleClick}/>
          })}
        </div>  
      </section>
    )
    
}

export default TeamMembers;

