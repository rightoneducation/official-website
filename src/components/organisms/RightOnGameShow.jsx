import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowHeading from "../molecules/GameShowHeading";
import GameShowVideo from "../atoms/GameShowVideo";
import GameShowDescription from '../molecules/GameShowDescription';

export default function RightOnGameShow(props) {
    const { styles } = props;
    return (
        <Box component="section">
            <Grid container className="game-show-section">
                <GameShowHeading styles={styles} />
                <div >
                    <div className="first-description-above" style={{ marginBottom: "40px" }}>
                        <h3 className="game-show-description1">Check out season highlights above and<br></br><u><a href="https://docs.google.com/spreadsheets/d/1HoT_r6AGKU6g7kldqFnvy47Mno3fHLXQE24cuNjY9eo/edit?usp=sharing" target="/" className="game-show-link">example questions <br className="desktop-break" /> and answers here</a></u>!
                        </h3>
                    </div>
                    <GameShowVideo />
                    <div className="first-description-above" style={{ marginBottom: "40px" }}>
                        <p className="game-show-description2">
                            Students across the country met online and adapted the<br></br> <i>RightOn!</i> beta app to a livestream game show for youth<br></br> where the best wrong answers win.
                        </p>
                    </div>
                </div>

                <GameShowDescription styles={styles} />
            </Grid>

        </Box>
    );
};