import React, { Component } from 'react';

import './App.css';
import './rwdgrid.css';

import LandingSection from 'components/organism/LandingSection'
import ProblemSection from 'components/organism/ProblemSection'
import ProductFeature from 'components/organism/ProductFeature'
import OurMission from 'components/molecule/OurMission'
import WhyRightOn from 'components/molecule/WhyRightOn'
import TeamMembers from 'components/organism/TeamMembers'
import Advisors from 'components/molecule/Advisors'
import Footer from 'components/organism/Footer'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='container patterned-background'>
            <LandingSection />
            <OurMission />
            <ProblemSection />           
            <WhyRightOn />
            <ProductFeature />
            <TeamMembers profiles={teamData} />
            <Advisors profiles={advisorData} />
          </div>
            <Footer />
        </div>
    );
  }
}

export default App;