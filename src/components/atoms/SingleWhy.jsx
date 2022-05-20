import React from 'react'
import {
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
    <Card style={{backgroundColor: "#501B87", boxShadow: "-5px 8px 10px rgba(0, 0, 0, 0.25)"}}
    className='why-cards'>
        <Grid>
        {/* <Grid container alignItems="center" justify="space-around" spacing={1}> */}
          <Grid>
            <img
              src={featureImage}
              alt="right-on-education-product-features"
              // width="100%"
              width= "359px"
              height= "238px"
              />
          </Grid>
          <Grid>
          <CardContent>
            <h3 className='why-cards-title'>
              {title}
              <hr className='why-cards-title-underline'/>
            </h3>
            <p className='why-cards-description'
              dangerouslySetInnerHTML={{__html : description}}/>
          </CardContent>
          </Grid>
        </Grid>
    </Card>
  );
}

export default singleWhy;