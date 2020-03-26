import React from 'react'

import SingleMember from '../atom/SingleMember'

function TeamMembers({ profileCards, handleFlip }) {
  return (
    <section id="team">
      <div>
        <h1>Meet the Team</h1>
      </div>
      <div className="flex-box team-profiles" style={{ margin: "auto" }}>
        {profileCards.map((profile, index) => {
          return (
            <SingleMember
              key={index}
              profile={profile}
              handleFlip={() => handleFlip(profile)}
            />
          );
        })}
      </div>
    </section>
  );
}
  
  export default TeamMembers;