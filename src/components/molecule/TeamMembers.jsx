import React from 'react'
import ReactCardFlip from 'react-card-flip'

// import Front from '../atom/Front'
// import Back from '../atom/Back'
import SingleMember from '../atom/SingleMember'

function TeamMembers (props) {
  const { isFlipped, handleFlip } = props
  // let flipped = devTeam[0].isFlipped

  // let flipped = isFlipped
  // console.log(flipped)
  
  // function handleFlip() {
  //     if ( flipped === false) {
  //       return flipped = true;
  //     }
  //   }
  //   console.log(flipped)
  
    return (
      <section id='team'>
        <div>
          <h1>Meet the Team</h1>
        </div>
        <div className='flex-box team-profiles' style={{margin: 'auto'}}>
        {props.profiles.devTeam.map((member, key) => {
          return <SingleMember key={key} member={member} isFlipped={isFlipped} handleFlip={handleFlip}
          />
        })}

        {/* <div className='card profile-card'> 
            <SingleMember member={devTeam[0]} handleClick={handleClick}/>
            <ReactCardFlip isFlipped={devTeam[0].isFlipped}>
              <button onClick={() => handleFlip()}>
                <img src={devTeam[0].photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
                </button>
              <div>
                <button onClick={handleClick}>Back</button>
              </div>  
            </ReactCardFlip>
         </div> */}
        {/* <div className='card profile-card'> 
            <SingleMember member={devTeam[1]} isFlipped={isFlipped} handleClick={handleClick}/>
            <ReactCardFlip isFlipped={flipped}>
              <button onClick={handleFlip}>
                <img src={devTeam[1].photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
                </button>
              <div>
                <button onClick={handleClick}>Back</button>
              </div>  
            </ReactCardFlip>
         </div> */}
        </div> 
        
      </section>
    )
    
  }
  
  export default TeamMembers;
  
  
  

  {/* <Front photo={devTeam[0].photo} handleClick={handleClick}/>   
              <Back favMistake={devTeam[0].favoriteMistake} favShow={devTeam[0].favoriteShow} handleClick={handleClick}/> */}

        //       <div className='card profile-card'> 
        //   <SingleMember member={devTeam[0]} isFlipped={isFlipped} handleClick={handleClick}/>
        //   <ReactCardFlip isFlipped={isFlipped}>
        //     <button onClick={handleClick}>
        //       <img src={devTeam[0].photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
        //     </button>
        //     <div><button onClick={handleClick}>Back</button></div>   
        //   </ReactCardFlip>
        //   <SingleMember member={devTeam[1]} isFlipped={isFlipped} handleClick={handleClick}/>
        //   <ReactCardFlip isFlipped={isFlipped}>
        //     <button onClick={handleClick}>
        //       <img src={devTeam[1].photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
        //     </button>
        //     <div><button onClick={handleClick}>Back</button></div>   
        //   </ReactCardFlip>
        // </div>