import React from 'react'

import SingleMember from '../atom/SingleMember'
import { is } from '@babel/types'

function TeamMembers (props) {
  const { isFlipped, handleClick } = props
    return (
      <section id='team'>
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className='team-profiles wrapper grid-d-8' style={{margin: 'auto'}}>
          {props.profiles.devTeam.map((member, key) => {
            return <SingleMember key={key} member={member} isFlipped={isFlipped} handleClick={handleClick}/>
          })}
        </div>  
      </section>
    )
    
}

export default TeamMembers;

