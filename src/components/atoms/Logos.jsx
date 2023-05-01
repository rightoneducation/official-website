import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";


function logos(props) {
  
  const { featureImage} = props.logos
  return (
    
      
    <Grid container justifyContent="center" alignItems="center" spacing={1}>
  <Grid item style={{ height: '130px' }}>
    <div style={{height: '130px'}} className='supporters'>
    <img
      src={featureImage}
      alt="right-on-education-product-features"
      style={{ marginLeft: "60px", marginRight: "60px" }}
      justifyContent="center" alignItems="center"
      
    />
      </div>
      
  </Grid>
</Grid>



    
  );
}

export default logos;


