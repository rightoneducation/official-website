import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
// import {browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/organism/LandingPage'
import AboutPage from 'components/organism/AboutPage'
import TeamPage from 'components/organism/TeamPage'
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PageHeader />
          <Switch>
            <Container className='container'>
              <Route exact path='/' 
                render={() => (
                <LandingPage/>
                )} 
                />
                {/* <TeamMembers profiles={teamData} />
                <Advisors profiles={advisorData} /> */}
                <Route path='/about' component={AboutPage} />
                <Route path='/team' component={TeamPage} />
            </Container>
          </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;