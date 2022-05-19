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
                    <RightOnGameShow /> 
                    <PositiveCultureOfErrorSection styles={styles}/>
                    <ErrorAnalysisActivitiesSection styles={styles}/>
                    <CRMT />
                </div>
            </div>
        )
    }

export default ResourcePage;
