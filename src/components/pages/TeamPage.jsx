import React from 'react'

import OurValue from '../organisms/OurValue';
import TeamPageImage from '../molecules/TeamPageImage';
import TeamMembers from '../organisms/TeamMembers'
import Advisors from '../organisms/Advisors'


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