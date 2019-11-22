import React from 'react'
import ReactCardFlip from 'react-card-flip'

// import Front from '../atom/Front'
// import Back from '../atom/Back'
import SingleMember from '../atom/SingleMember'

function TeamMembers (props) {
  const { profileCards, handleFlip, isFlipped } = props
  
    return (
      <section id='team'>
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className='flex-box team-profiles' style={{margin: 'auto'}}>
        {profileCards.map((profile, index) => {
          console.log(index)
          return <SingleMember key={index} profile={profile} handleFlip={handleFlip} isFlipped={isFlipped}
          />
        })}
        </div> 
        
      </section>
    )
    
  }
  
  export default TeamMembers;