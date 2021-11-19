import React from 'react';
import ErrorAnalysisActivitiesSection from '../organisms/ErrorAnalysisActivitiesSection';
import PositiveCultureOfErrorSection from 'components/organisms/PositiveCultureOfErrorSection';

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