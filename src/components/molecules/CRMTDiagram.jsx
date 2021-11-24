import React from 'react';
import CRMT from '../../images/CRMT-text.png';

export default function CRMTDiagram() {
    return(
        <div style={ {position: 'relative', marginTop: '40px', paddingBottom: '50px'} }>
            <img src={CRMT} alt="CRMTDiagram" style={ {display: 'flex', marginRight: 'auto', marginLeft: 'auto', width: "50%"} } />
        </div>
    );
}