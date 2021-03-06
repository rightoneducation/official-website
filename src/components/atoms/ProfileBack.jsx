import React from 'react'

function Back (props) {
    const {favShow, favMistake} = props
    return (
      <div
        style={{ borderLeft: "3px solid #d80053", paddingLeft: "10px" }}
      >
        <h5 style={{ marginBottom: "10px" }}>Favorite game show:</h5>
        <p style={{ fontSize: ".9rem" }}>{favShow}</p>
        <br />
        <h5 style={{ marginBottom: "10px" }}>Favorite mistake: </h5>
        <p style={{ fontSize: ".9rem" }}>{favMistake}</p>
      </div>
    );
}

export default Back;