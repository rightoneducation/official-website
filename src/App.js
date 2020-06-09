import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/pages/LandingPage.jsx'
import AboutPage from 'components/pages/AboutPage'
import TeamPage from 'components/pages/TeamPage'
import PageHeader from 'components/molecules/PageHeader'
import Footer from 'components/molecules/Footer'

import teamData from '_localDb/teamData'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '0px',
  },
  bannerImage: {
    background: "lightgrey",
    marginBottom: "-5%",
    overflow: "hidden",
    objectFit: "contain",
    objectPosition: "center"
  },
  cardIntro: {
    justifyContent: 'center',
    color: 'white',
    width: '85%',
    position: "relative",
    padding: "8% 5%",
    margin: 'auto',
    mixBlendMode: 'multiply',
    background: 'linear-gradient(201.84deg, #B443CC 0%, #662AAF 73.19%)'
  },
  cardContent: {
    borderLeft: "8px solid #d80053",
    marginTop: "20px",
    paddingLeft: "20px",
    fontWeight: "300",
    lineHeight: "1.4",
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em'
    }
  },

}))

function App() {
  const styles = useStyles()
  return (
    <Router>
      <Box className="App">
        <PageHeader styles={styles} />
        <Switch>
          <Container maxWidth="false" className={styles.container}>
            <Route exact path="/" render={() => <LandingPage styles={styles} />} />
            <Route path="/about" render={() => <AboutPage styles={styles} />} />
            <Route
              path="/team"
              render={() => (
                <TeamPage
                  styles={styles}
                  profileCards={teamData.devTeam}
                  advisorData={teamData.advisors}
                />
              )}
            />
          </Container>
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;