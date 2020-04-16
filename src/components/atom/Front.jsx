import React from 'react'

function Front (props) {
    const {photo, handleFlip} = props
    return (
        <div>
            <button onMouseOver={handleFlip}>
                <img src={photo} width='100%' className='profile-photo' alt='right-on-education-team-member'/>
            </button>
        </div>
    )
}

export default Front;