import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'


function TeamPage (props) { 
  const { advisorData } = props
    return (
      <div>
        <OurValue/>
        <TeamMembers {...props}/>
        <Advisors advisorProfiles={advisorData} />
      </div>
    )
}

export default TeamPage;