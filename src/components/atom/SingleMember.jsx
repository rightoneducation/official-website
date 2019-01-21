import React from 'react'

function singleMember (props) {
  const {name, photo, title, favoriteShow, favoriteMistake} = props.member
  return(
      <div className='single-col'>
          <center>
            <img src={photo} width='80%' className='profile-photo' />
            <h4 className='single-col-title'>{name}</h4>
            <h6 className='job-title'>{title}</h6>
          </center>
          <p className='feature-description'>
            <b>Favorite game show:</b>
            <br />
            {favoriteShow}
            <br /><br />
            <b>Favorite mistake: </b>
            <br />
            {favoriteMistake}
          </p>
      </div>
  )
}

export default singleMember;