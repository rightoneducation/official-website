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
                <div className={styles.circle} />
                <CRMT />
                <div className={styles.square} />
                <ErrorAnalysisActivitiesSection styles={styles}/>
                <RightOnGameShow />
                <div className={styles.hexagon} />
            </div>
        )
    }

export default ResourcePage;
