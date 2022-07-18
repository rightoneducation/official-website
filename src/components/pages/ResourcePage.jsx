import React from 'react';
import PositiveCultureOfErrorSection from '../organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';
import ResourcePageShapes from '../organisms/ResourcePageShapes';
import RightOnVideoPlaylist from '../organisms/RightOnVideoPlaylist';
import GoToTop from '../../GoToTop';

function ResourcePage({videoSrc, styles}) {
   
    return (
        <div className={styles.resourcesPageBk} style={{ position: 'relative' }}>
            <ResourcePageShapes />
            <div style={{ position: 'relative', zIndex: '1' }}>
                <RightOnVideoPlaylist videoSrc={videoSrc}/>
                <ErrorAnalysisActivitiesSection styles={styles} />
                <CRMT />
                <PositiveCultureOfErrorSection styles={styles} />
                <RightOnGameShow />
            </div>
            <GoToTop/>
        </div>
    )
}

export default ResourcePage;
