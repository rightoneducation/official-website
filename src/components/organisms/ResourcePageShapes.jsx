import * as React from 'react'

const circle = {
    position: 'absolute',
    top: '65vw',
    left: '-5vw',
    borderRadius: '50%',
    width: '708px',
    height: '708px',
    background: 'rgba(255, 255, 255, 0.15)',
    opacity: '0.5',
    boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)'
}
const square = {
    position: 'absolute',
    top: '130vw',
    left: '85vw',
    width: '503px',
    height: '516px',
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)',
    transform: 'rotate(31.35deg)'
}
const hexagon = {
    position: 'absolute',
    top: '200vw',
    left: '-30vw',
    width:' 840px',
    height: '840px',
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
    opacity: '0.15',
    background: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    transform: 'rotate(139.2deg)'
}

export default function ResourcePageShapes() {
    return(
        <div style={ {position: 'absolute', zIndex: '0', width: '100%', height: '100%', overflow: 'hidden'} }>
            <div style={circle} />
            <div style={square} />
            <div style={hexagon} />
        </div>
    )
};