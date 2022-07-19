import * as React from 'react'

const circle1 = {
    position: "absolute",
    width: "604px",
    height: "605px",
    //left: "1200px",
    //top: "1050px",
    left: "1371px",
    top: "1750px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 8.68%, rgba(118, 35, 116, 0) 108.68%)",
    boxShadow: "3px 14px 104px #481372",
    borderRadius: '50%',

}

const circle2 = {
    position: "absolute",
    width: "801px",
    height: "801px",
    left: "-200px",
    top: "1900px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    boxShadow: "3px 14px 104px #481372",
    borderRadius: '50%',
}

export default function AboutPageShapes() {
    return (
        <div style={{ position: 'absolute', zIndex: '0', width: '100%', height: '100%', overflow: 'hidden' }}>
            <div style={circle1} />
            <div style={circle2} />
        </div>
    )
};