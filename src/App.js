import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'
import Link from 'next/link'

import './App.scss';
import './rwdgrid.css';


import AboutPage from 'components/organism/AboutPage'
import TeamPage from 'components/organism/TeamPage'
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
          <PageHeader />
          <Container className='container'>
              {/* <OurMission />
              <ProblemSection />           
              <WhyRightOn valueprops={featureData.valueprops}/>
              <ProductFeatures features={featureData}/> */}
              {/* <TeamMembers profiles={teamData} />
              <Advisors profiles={advisorData} /> */}
              {/* <AboutPage/> */}
              <TeamPage/>
          </Container>
            <Footer />
        </div>
    );
  }
}

export default App;