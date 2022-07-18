import React from 'react'

import TeamMembers from '../organisms/TeamMembers'
import Advisors from '../organisms/Advisors'
import TeamPageImage from '../molecules/TeamPageImage'
import GoToTop from '../../GoToTop'


function TeamPage ({ advisorData, profileCards, handleFlip, styles }) { 
    return (
      <div>
        <TeamPageImage styles={styles}/>
        <TeamMembers profileCards={profileCards} handleFlip={handleFlip}/>
        <Advisors advisorProfiles={advisorData} />
        <GoToTop/>
      </div>
    )
}

export default TeamPage;