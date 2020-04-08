import React from 'react'
import { Typography, Grid, Avatar } from "@material-ui/core";

function Advisor (props) {
  const {name, photo, profile,title, linkedIn} = props.advisor
  return (
    <Grid container className="single-advisor-profile">
      <Grid container alignItems="center">
        <Grid item>
        <a href={linkedIn} target='_blank' rel="noopener noreferrer"><img src={photo} className='profile-photo-advisors' alt='' /></a>
        </Grid>
        <Grid item>
        <h3 style={{fontWeight: '300', marginRight: '10px'}}>{name}</h3>
          <h5 className='high-light'>{title}</h5>
        </Grid>
      </Grid>
      <Grid>
        <p style={{fontSize: '.9rem'}}>{profile}</p>
      </Grid>
    </Grid>
  )
}

export default Advisor;