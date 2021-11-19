import React from 'react';
import PositiveCultureOfErrorSection from 'components/organisms/PositiveCultureOfErrorSection';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';

function ResourcePage(props) {
    const { styles } = props
        return(
            <div>
                <PositiveCultureOfErrorSection styles={styles}/>
                <ErrorAnalysisActivitiesSection/>
            </div>
        )
    }

export default ResourcePage;