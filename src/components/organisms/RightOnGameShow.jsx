import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import GameShowVideo from "../atoms/GameShowVideo";
import GameShowDescription from '../molecules/GameShowDescription';

export default function RightOnGameShow(props) {
    const { styles } = props;
    return(
        <Box component="section">
            <Grid container style={ {justifyContent: "center"} }>
                    <GameShowHeading styles={ styles } />
                    <GameShowVideo />
            </Grid>
            <GameShowDescription styles={ styles } />
        </Box>
    );
};