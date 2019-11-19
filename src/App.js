import React, { Component } from 'react';
// import {browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import { Transition } from 'semantic-ui-react'

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/organism/LandingPage.jsx'
import AboutPage from 'components/organism/AboutPage'
import TeamPage from 'components/organism/TeamPage'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isFlipped: false,
      animation: 'slideLeft', 
      duration: 500, 
      expanded: false
    }
    this.handleFlip = this.handleFlip.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }
  componentWillUnmount() {
    window.clearTimeout(this.locationTimeout);
  }
  
  handleFlip(e){
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }))
  }
  handleExpand (e) {
    this.setState(prevState => ({
      expanded: !prevState.expended
    }))
  }
  render() {
    const {animation, duration, expanded, isFlipped} = this.state
    return (
      <Router>
        <div className="App">
          <PageHeader />
          <Switch>
            <div className='container'>
              <Route exact path='/' render={() => (<LandingPage/>)} />
              <Route path='/about' render={() => (
                <AboutPage handleExpand={this.handleExpand} animation={animation} duration={duration} expanded={expanded}/>
              )}/>
              <Route path='/team' render={() => (
                <TeamPage isFlipped={isFlipped} handleClick={this.handleFlip}/>
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