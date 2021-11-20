import React from 'react';
import PositiveCultureOfErrorSection from 'components/organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div>
                <PositiveCultureOfErrorSection styles={styles}/>
                <ErrorAnalysisActivitiesSection/>
                <CRMT />
                <RightOnGameShow />
            </div>
        )
    }

export default ResourcePage;