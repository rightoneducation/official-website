import React from 'react'
import ReactCardFlip from 'react-card-flip'

import SingleMember from '../atom/SingleMember'

function TeamMembers (props) {
  const { profileCards, handleFlip} = props
    return (
      <section id='team'>
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className='flex-box team-profiles' style={{margin: 'auto'}}>
        
        {profileCards.map((profile) => {  
          return <SingleMember profile={profile} handleFlip={() => handleFlip(profile)}
          />
        })}
        </div> 
        
      </section>
    )
    
  }
  
  export default TeamMembers;