import React from 'react'

function Back (props) {
    const {favShow, favMistake, handleFlip} = props
    return (
        <div className='card' style={{borderLeft: '3px solid #d80053'}}>
            <button onClick={handleFlip}>
            <h5 style={{marginBottom: '10px'}}>Favorite game show:</h5>
            <p>{favShow}</p>
            <br />
            <h5 style={{marginBottom: '10px'}}>Favorite mistake: </h5>
            <p>{favMistake}</p>
          </button>
        </div>
    )
}

export default Back;