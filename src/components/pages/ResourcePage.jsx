import React from 'react';
import PositiveCultureOfErrorSection from '../organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';
import ResourcePageShapes from '../organisms/ResourcePageShapes';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div className={styles.resourcesPageBk} style={{position: 'relative'}}>
                <ResourcePageShapes />
                <div style={ {position: 'relative', zIndex: '1'} }>
                    <PositiveCultureOfErrorSection styles={styles}/>
                    <CRMT />
                    <ErrorAnalysisActivitiesSection styles={styles}/>
                    <RightOnGameShow />
                </div>
            </div>
        )
    }

export default ResourcePage;
