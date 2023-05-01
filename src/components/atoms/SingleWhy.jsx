import React from 'react'
import topBackground from '../../images/background-symbols.svg'
import {
  Grid,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";

function singleWhy(props) {
  const { title, featureImage, description } = props.singleWhy
  return (
    <Card style={{ backgroundColor: "#501B87", boxShadow: "-5px 8px 10px rgba(0, 0, 0, 0.25)" }}
      className='why-cards'>
      <Grid container alignItems="center" justify="center" spacing={1}>
        <Grid>
          <img
            src={featureImage}
            alt="right-on-education-product-features"
            // width="100%"
            width="359px"
            height="238px"
          />
        </Grid>
        <Grid>
          <CardContent>
            <h3 className='why-cards-title'>
              {title}
              <hr className='why-cards-title-underline' />
            </h3>
            <p className='why-cards-description'
              dangerouslySetInnerHTML={{ __html: description }} />
          </CardContent>
        </Grid>
       
      </Grid>
      <img
      src={topBackground}
      className='why-section-top-background'
      // width="100%"
      alt="math-background"
    />
    </Card>
  );
}

export default singleWhy;