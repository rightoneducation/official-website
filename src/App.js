import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
// import {browserHistory} from "react-router";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.scss';
import './rwdgrid.css';

import LandingPage from 'components/organism/LandingPage.jsx'
import AboutPage from 'components/organism/AboutPage'
import TeamPage from 'components/organism/TeamPage'
import PageHeader from 'components/molecule/PageHeader'
import Footer from 'components/molecule/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PageHeader />
          <Switch>
            {/* <Container> */}
              <Route exact path='/' render={() => (<LandingPage/>)} />
              <Route path='/about' component={AboutPage} />
              <Route path='/team' component={TeamPage} />
            {/* </Container> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;