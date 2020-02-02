import React from 'react'

import teamIcon from '../../images/team-icon.svg'

function IntroToTeam () {
    return(
        <section id='intro-to-team' className='wrapper' style={{justifyContent: 'space-evenly'}}>
            <div>
            <img src={teamIcon} alt='right-on-education-team-icon' width= '100%'/>
            </div>
            <div className='bottom-link'>
              <h1 style={{fontWeight: '300'}}>
              We are a diverse group of people who are passionate about education and technology!
              </h1>
              <button className='meet-team'>
                  <a href='/team'><h2 style={{marginBottom: '0px'}}>Meet the Team</h2></a>
                  </button>
            </div>
        </section>
    )
}

export default IntroToTeam;