import React, { useState } from 'react';
// import {browserHistory} from "react-router";
import Box from "@material-ui/core/Box";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/pages/LandingPage.jsx'
import AboutPage from 'components/pages/AboutPage'
import TeamPage from 'components/pages/TeamPage'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

import teamData from '_localDb/teamData'


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
  
  return (
    <Router>
        <Box className="App">
          <PageHeader />
          <Switch>
            <div className='container'>
              <Route exact path='/' render={() => (
                <LandingPage/>
              )} />
              <Route path='/about' render={() => (
                <AboutPage />
              )}/>
              <Route path='/team' render={() => (
                <TeamPage 
                  handleFlip={handleFlip} 
                  profileCards={devTeamCards} 
                  advisorData={advisorProfiles}/>
              )}/>
            </div>
          </Switch>
          <Footer />
        </Box>
      </Router>
  )
}

export default App;