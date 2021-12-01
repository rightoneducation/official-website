import React from 'react';
import PositiveCultureOfErrorSection from '../organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';
import '../../resourcepage.css';

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