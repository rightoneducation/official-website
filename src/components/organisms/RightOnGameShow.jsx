import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameShowVideo from "../atoms/GameShowVideo";
import GameShowDescription from '../molecules/GameShowDescription';

export default function RightOnGameShow(props) {
    const { styles } = props;
    return (
        <Box style={{width: '100%', marginTop: '50px'}}>
            <Grid container className="game-show-section"style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-between', alignItems: 'center',  paddingLeft: '10%', paddingRight: '10%'}}>
                <Box style={{width: '100%'}}>
                    <h4 className="game-show-header">
                        RightOn! <br className="mobile-break"></br>Game Show
                        <hr className='teach-like-champ-underline' />
                    </h4>
                </Box>
                <div style={{width: '100%'}}>
                    <div className="first-description-above" style={{ marginBottom: "40px", width: '100%' }}>
                        <h3 className="game-show-description1">Check out season highlights <br className="mobile-break"></br>above and <br className="tablet-br"></br><u><a href="https://docs.google.com/spreadsheets/d/1HoT_r6AGKU6g7kldqFnvy47Mno3fHLXQE24cuNjY9eo/edit?usp=sharing" target="/" className="game-show-link">example <br className="mobile-break"></br>questions and answers <br className="mobile-break"></br>here</a></u>!
                        </h3>
                    </div>
                    <GameShowVideo />
                    <div className="first-description-above" style={{ marginBottom: "40px" , width: '100%'  }}>
                        <p className="game-show-description2">
                            Students across the country <br className="small-desk-break"></br>met online and adapted the<br className="small-desk-break"></br><br className="tablet-br"></br> <i>RightOn!</i> beta app to a <br className="small-desk-break"></br>livestream game show for youth<br className="small-desk-break"></br><br className="tablet-br"></br> where the best wrong answers <br className="small-desk-break"></br>win.
                        </p>
                    </div>
                </div>
                <GameShowDescription styles={styles} />
            </Grid>
        </Box>
    );
};