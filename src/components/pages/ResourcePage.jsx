import React from 'react';
import PositiveCultureOfErrorSection from '../organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import CRMT from '../organisms/CRMT';
import RightOnGameShow from '../organisms/RightOnGameShow';
import ResourcePageShapes from '../organisms/ResourcePageShapes';
import RightOnVideoPlaylist from '../organisms/RightOnVideoPlaylist';
import AboutBannerImage from '../molecules/AboutBannerImage';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div className={styles.resourcesPageBk} style={{position: 'relative'}}>
                <ResourcePageShapes />
                <div style={ {position: 'relative', zIndex: '1'} }>
                    <AboutBannerImage/>
                    <RightOnVideoPlaylist />
                    <ErrorAnalysisActivitiesSection styles={styles}/>
                    <CRMT />
                    <PositiveCultureOfErrorSection styles={styles}/>
                    <RightOnGameShow />
                </div>
            </div>
        )
    }

export default ResourcePage;
