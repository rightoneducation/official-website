import React from 'react'

import SingleMember from '../atom/SingleMember'

function TeamMembers (props) {
    return (
      <section id='team' className='wrapper'>
        <div className='section-intro'>
          <h2>Meet the Team</h2>
        </div>
        <div className='col-wrapper'>
          {props.profiles.devTeam.map((member, key) => {
            return <SingleMember key={key} member={member} />
          })}
        </div>  
      </section>
    )
    
}

export default TeamMembers;

