import * as React from 'react'

const circle1 = {
    position: "absolute",
    width: "604px",
    height: "605px",
    left: "1200px",
    top: "1050px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    boxShadow: "3px 14px 104px #481372",
    // position: 'absolute',
    // top: '65vw',
    // left: '-5vw',
    borderRadius: '50%',
    // width: '708px',
    // height: '708px',
    // background: 'rgba(255, 255, 255, 0.15)',
    // opacity: '1',
    // boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)'
}
const square = {
    position: "absolute",
    width: "606px",
    height: "606px",
    left: "-150px",
    top: "3000px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    transform: "rotate(-40.94deg)",
    // position: 'absolute',
    // top: '130vw',
    // left: '85vw',
    // width: '503px',
    // height: '516px',
    // background: 'rgba(255, 255, 255, 0.15)',
    // boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)',
    // transform: 'rotate(31.35deg)'
}
const circle2 = {
    position: "absolute",
    width: "604px",
    height: "605px",
    left: "1250px",
    top: "3200px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    boxShadow: "3px 14px 104px #481372",
    borderRadius: '50%',
    // position: 'absolute',
    // top: '200vw',
    // left: '-30vw',
    // width: ' 840px',
    // height: '840px',
    //clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
    borderRadius: '50%',
    // background: 'white',
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    // transform: 'rotate(139.2deg)'
}

export default function ResourcePageShapes() {
    return (
        <div style={{ position: 'absolute', zIndex: '0', width: '100%', height: '100%', overflow: 'hidden' }}>
            <div style={circle1} />
            <div style={square} />
            <div style={circle2} />
        </div>
    )
};