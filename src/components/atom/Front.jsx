import React from 'react'

function Front (props) {
    const {photo, handleClick} = props
    return (
        <div>
            {/* <button onClick={handleClick}> */}
                <img src={photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
            {/* </button> */}
        </div>
    )
}

export default Front;