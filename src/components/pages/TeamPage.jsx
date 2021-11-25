import React from 'react'

import OurValue from '../organisms/OurValue';
import TeamMembers from '../organisms/TeamMembers'
import Advisors from '../organisms/Advisors'


function TeamPage ({ advisorData, profileCards, handleFlip, styles }) { 
    return (
      <div>
        <OurValue styles={styles}/>
        <TeamMembers profileCards={profileCards} handleFlip={handleFlip}/>
        <Advisors advisorProfiles={advisorData} />
      </div>
    )
}

export default TeamPage;