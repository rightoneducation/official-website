import React from 'react'
import {
  Box,
  Grid
} from "@material-ui/core";
import SingleAbout from '../atoms/SingleAbout';

function AboutCards(props) {
    const { aboutCards } = props
    return (
    <Box component="section">
        <Grid container alignItems="center" >
            <Grid
                item
                container
                xs={12}
                sm={8}
                md={10}
                // spacing={1}
                justify="space-between"
                >
                {aboutCards.map((aboutCards, key) => {
                    return (
                    <Grid item md={4}>
                        <SingleAbout key={key} aboutCards={aboutCards} />
                    </Grid>
                    );
                })}
            </Grid>
        </Grid>
    </Box>
);
}

export default AboutCards;
