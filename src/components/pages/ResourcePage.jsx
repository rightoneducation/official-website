import React from 'react';
import PositiveCultureOfErrorSection from '../organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div className={styles.resourcesPageBk}>
                <PositiveCultureOfErrorSection styles={styles}/>
                <CRMT />
                <ErrorAnalysisActivitiesSection styles={styles}/>
                <RightOnGameShow />
            </div>
        )
    }

export default ResourcePage;