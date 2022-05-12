import React from 'react'
import { Box, Grid} from "@material-ui/core";
import ProfileMembers from '../molecules/ProfileMembers'
function TeamMembers(props) {
  return (
    <Box component="section" >
      <Grid container justify="center" >
        <div className='team-page-intros'>
        <h1 
          className='page-banners'>
          Meet Our Team
          <hr className='page-banners-underline'/>
        </h1>
        </div>
        <ProfileMembers {...props}/>
      </Grid>
    </Box>
  );
}
  
  export default TeamMembers;