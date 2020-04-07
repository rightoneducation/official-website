import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import teamIcon from '../../images/team-icon.svg'

const useStyles = makeStyles({
    intro: {
        padding: "8%",
        background: "linear-gradient(180deg, rgba(102, 42, 175, 0.495) -20%, #FFFFFF 90%)"
    }
})

function IntroToTeam () {
    const styles = useStyles()
    return(
        <Box components="section" className={styles.intro}>
            <Grid container alignItems="center" justify="space-around">
            <Grid xs={6} sm={5} md={3}>
            <img src={teamIcon} alt='right-on-education-team-icon' width= '100%'/>
            </Grid>
            <Grid xs={12} sm={12} md={7}>
                <Grid container justify="center" alignItems="center">
                    <Typography variant="h5" style={{ margin: "20px", fontWeight: '300', textAlign: "center" }}>
                    We are a diverse group of people who are passionate about education and technology!
                    </Typography>
                    <Button variant="contained" color="secondary">
                    <a href='/team'><h2 style={{marginBottom: '0px'}}>Meet the Team</h2></a>
                    </Button>
                </Grid>
            </Grid>
            </Grid>
        </Box>
    )
}

export default IntroToTeam;