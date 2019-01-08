import React from 'react'

import hash from '../images/hash_icon.svg'

import SingleMember from './atom/TeamMember'

function Team (props) {
    return (
      <section id='team' className='card-wrapper'>
        <div className='section-intro'>
          <h2><img src={hash} width='8%' className='about-icons' alt='product feature' />Meet the Team</h2>
        </div>
        <div className='col-wrapper'>
          {props.profiles.devTeam.map((member, key) => {
            return <SingleMember key={key} member={member} />
          })}
        </div>  
      </section>
    )
    
}

export default Team;