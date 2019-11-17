import React from 'react'

function singleMember (props) {
  const {name, photo, title, favoriteShow, favoriteMistake} = props.member
  return(
      <div className='single-col'>
          <center>
            <img src={photo} width='80%' className='profile-photo' alt='right-on-education-team-member'/>
            <h3 className='single-col-title'>{name}</h3>
            <h6 className='job-title'>{title}</h6>
          </center>
          <p className='feature-description'>
            <h5>Favorite game show:</h5>
            <br />
            {favoriteShow}
            <br /><br />
            <h5>Favorite mistake: </h5>
            <br />
            {favoriteMistake}
          </p>
      </div>
  )
}

export default singleMember;