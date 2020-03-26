import React, { Component } from 'react';
// import {browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/organism/LandingPage.jsx'
import AboutPage from 'components/organism/AboutPage'
import TeamPage from 'components/organism/TeamPage'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

import teamData from '_localDb/teamData'

class App extends Component {
  constructor () {
    super()
    this.state = {
      devTeamCards: teamData.devTeam,
      advisorProfiles: teamData.advisors
    }
    // this.handleFlip = this.handleFlip.bind(this);
  }

  handleFlip = item => {
    console.log(item)
    const idx = this.state.devTeamCards.findIndex(i => i.id === item.id)
    if (idx === -1 ){
      return
    }
    const newItems = [...this.state.devTeamCards]
    newItems[idx] = {
      ...item,
      isFlipped: !item.isFlipped
    }
    this.setState({devTeamCards: newItems})
  }
  render() {
    const { devTeamCards, advisorProfiles } = this.state
    return (
      <Router>
        <div className="App">
          <PageHeader />
          <Switch>
            <div className='container'>
              <Route exact path='/' render={() => (<LandingPage/>)} />
              <Route path='/about' render={() => (
                <AboutPage handleExpand={this.handleExpand} />
              )}/>
              <Route path='/team' render={() => (
                <TeamPage 
                  profileCards={devTeamCards} 
                  handleFlip={this.handleFlip} 
                  advisorData={advisorProfiles}/>
              )}/>
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;