import React, { Component } from 'react';

import './App.scss';
import './rwdgrid.css';

import ProductFeatures from 'components/molecule/ProductFeatures'
import OurMission from 'components/molecule/OurMission'
import WhyRightOn from 'components/molecule/WhyRightOn'
import TeamMembers from 'components/molecule/TeamMembers'
import Advisors from 'components/molecule/Advisors'
import PageHeader from 'components/molecule/PageHeader'
import ProblemSection from 'components/molecule/ProblemSection'
import Footer from 'components/molecule/Footer'

import advisorData from '_localDb/advisors'
import teamData from '_localDb/devTeam'
import featureData from '_localDb/features'


class App extends Component {
  render() {
    return (
        <div className="App">
          <div className='container patterned-background'>
            {/* <div className='container-fluid grid-d-7'> */}
              <PageHeader />
              <OurMission />
              <ProblemSection />           
              <WhyRightOn valueprops={featureData.valueprops}/>
              <ProductFeatures features={featureData}/>
              <TeamMembers profiles={teamData} />
              <Advisors profiles={advisorData} />
            {/* </div> */}
          </div>
            <Footer />
        </div>
    );
  }
}

export default App;