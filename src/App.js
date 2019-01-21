import React, { Component } from 'react';

import './App.css';
import './rwdgrid.css';

import LandingSection from 'components/organism/LandingSection'
import ProblemSection from 'components/organism/ProblemSection'
import ProductFeatures from 'components/organism/ProductFeatures'
import OurMission from 'components/molecule/OurMission'
import WhyRightOn from 'components/molecule/WhyRightOn'
import TeamMembers from 'components/organism/TeamMembers'
import Advisors from 'components/molecule/Advisors'
import Footer from 'components/organism/Footer'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'
import featureData from '_localDb/features'


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='container patterned-background'>
            <LandingSection />
            <OurMission />
            <ProblemSection />           
            <WhyRightOn />
            <ProductFeatures features={featureData}/>
            <TeamMembers profiles={teamData} />
            <Advisors profiles={advisorData} />
          </div>
            <Footer />
        </div>
    );
  }
}

export default App;