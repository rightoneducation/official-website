import * as React from 'react'

const circle1 = {
    position: "absolute",
    width: "604px",
    height: "605px",
    left: "1200px",
    top: "1050px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    boxShadow: "3px 14px 104px #481372",
    borderRadius: '50%',
}
const square = {
    position: "absolute",
    width: "606px",
    height: "606px",
    left: "-150px",
    top: "3000px",
    background: "linear-gradient(180deg, rgba(118, 35, 116, 0.49) 0%, rgba(118, 35, 116, 0) 100%)",
    transform: "rotate(-40.94deg)",
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
    borderRadius: '50%',
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