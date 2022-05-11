import React from 'react'
import { Box, Grid} from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
function TeamMembers(props) {
  return (
    <Box component="section" style={{ background: "#322759"}}>
      <Grid container justify="center" >
        <div className='team-page-intros'>
        <h1 
          className='team-page-banners'>
          Meet Our Team
          <hr className='team-page-banners-underline'/>
        </h1>
        </div>
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;