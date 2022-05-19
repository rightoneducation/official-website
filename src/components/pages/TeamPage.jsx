import React from 'react'

import TeamMembers from '../organisms/TeamMembers'
import Advisors from '../organisms/Advisors'
import TeamPageImage from '../molecules/TeamPageImage'


function TeamPage ({ advisorData, profileCards, handleFlip, styles }) { 
    return (
      <div>
        <TeamPageImage styles={styles}/>
        <TeamMembers profileCards={profileCards} handleFlip={handleFlip}/>
        <Advisors advisorProfiles={advisorData} />
      </div>
    )
}

export default TeamPage;