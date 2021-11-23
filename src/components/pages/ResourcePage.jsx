import React from 'react';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import PositiveCultureOfErrorSection from 'components/organisms/PositiveCultureOfErrorSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';
import 'resourcepage.css';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div className="resourceStyles">
                <PositiveCultureOfErrorSection styles={styles}/>
                <ErrorAnalysisActivitiesSection/>
                <CRMT />
                <RightOnGameShow />
            </div>
        )
}

export default ResourcePage;