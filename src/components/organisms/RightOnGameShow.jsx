import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import GameShowVideo from "../atoms/GameShowVideo";
import GameShowDescription from '../molecules/GameShowDescription';
import ResourcesHeader from "../atoms/ResourcesHeader";

export default function RightOnGameShow(props) {
    const { styles } = props;
    return(
        <Box component="section">
            <Grid container >
                    <ResourcesHeader/>
                    <GameShowHeading/>
                    <GameShowVideo />
            </Grid>
            <GameShowDescription styles={ styles } />
        </Box>
    );
};