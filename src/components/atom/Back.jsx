import React from 'react'

function Back (props) {
    const {favShow, favMistake, handleClick} = props
    return (
        <div>
            <p>
            <h5>Favorite game show:</h5>
            <br />
            {favShow}
            <br /><br />
            <h5>Favorite mistake: </h5>
            <br />
            {favMistake}
          </p>
          <button onClick={handleClick}>Click to flip</button>
        </div>
    )
}

export default Back;