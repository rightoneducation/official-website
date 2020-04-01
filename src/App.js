import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/pages/LandingPage.jsx'
import AboutPage from 'components/pages/AboutPage'
import TeamPage from 'components/pages/TeamPage'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

import teamData from '_localDb/teamData'



const useStyles = makeStyles({
  container: {
    padding: '0px'
  }
})

function App() {
  const [teamProfiles, setProfiles] = useState({
    devTeamCards: teamData.devTeam,
    advisorProfiles: teamData.advisors
  })
  const [advisors] = useState({
    advisorProfiles: teamData.advisors
  })
  const { devTeamCards } = teamProfiles
  const { advisorProfiles } = advisors

  const handleFlip = item => {
    const idx = devTeamCards.findIndex(i => i.id === item.id)
    if (idx === -1) {
      return
    }
    const newItems = [...devTeamCards]
    newItems[idx] = {
      ...item,
      isFlipped: !item.isFlipped
    }
    setProfiles({
      devTeamCards: newItems
    })
  }
  const styles = useStyles()
  return (
    <Router>
      <Box className="App">
        <PageHeader />
        <Switch>
          <Container maxWidth="false" className={styles.container}> 
            <Route exact path="/" render={() => <LandingPage />} />
            <Route path="/about" render={() => <AboutPage />} />
            <Route
              path="/team"
              render={() => (
                <TeamPage
                  handleFlip={handleFlip}
                  profileCards={devTeamCards}
                  advisorData={advisorProfiles}
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