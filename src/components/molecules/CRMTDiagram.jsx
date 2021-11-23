import React from 'react';
import CRMT from '../../images/CRMT-text.png';

export default function CRMTDiagram() {
    return(
        <div style={ {position: 'relative', marginTop: '40px', paddingBottom: '50px', alignItems: "center"} }>
            <img src={CRMT} alt="CRMTDiagram" style={ {display: 'flex', width: "100%"} } />
        </div>
    );
}