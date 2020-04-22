import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'


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