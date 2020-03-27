import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from './node_modules/components/molecule/TeamMembers'
import Advisors from './node_modules/components/molecule/Advisors'


function TeamPage ({ advisorData, profileCards, handleFlip }) { 
    return (
      <div>
        <OurValue/>
        <TeamMembers profileCards={profileCards} handleFlip={handleFlip}/>
        <Advisors advisorProfiles={advisorData} />
      </div>
    )
}

export default TeamPage;