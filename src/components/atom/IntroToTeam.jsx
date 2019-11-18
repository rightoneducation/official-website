import React from 'react'

import teamIcon from '../../images/team-icon.svg'

function IntroToTeam () {
    return(
        <section id='intro-to-team' className='wrapper'>
            <img src={teamIcon} alt='right-on-education-team-icon' width= '15%'/>
            <div className='bottom-link'>
              <h2 style={{fontWeight: '300'}}>
              We are a diverse group of people who are passionate about education and technology!
              </h2>
              <button className='meet-team'>
                  <a href='/team'><h2>Meet the Team</h2></a>
                  </button>
            </div>
        </section>
    )
}

export default IntroToTeam;