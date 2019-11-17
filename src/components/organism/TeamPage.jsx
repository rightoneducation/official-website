import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'


function TeamPage () {
    return (
      <div>
        <OurValue/>
        <TeamMembers profiles={teamData}/>
        <Advisors profiles={advisorData} />
      </div>
    )
}

export default TeamPage;