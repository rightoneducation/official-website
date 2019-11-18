import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'


function TeamPage (props) { 
    return (
      <div>
        <OurValue/>
        <TeamMembers profiles={teamData} {...props}/>
        <Advisors profiles={advisorData} />
      </div>
    )
}

export default TeamPage;