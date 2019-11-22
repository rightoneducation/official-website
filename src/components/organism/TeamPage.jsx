import React from 'react'

import OurValue from '../molecule/OurValue';
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'

import advisorData from '_localDb/advisors'


function TeamPage (props) { 
    return (
      <div>
        <OurValue/>
        <TeamMembers {...props}/>
        <Advisors profiles={advisorData} />
      </div>
    )
}

export default TeamPage;