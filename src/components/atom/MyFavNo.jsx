import React from 'react'

function MyFavNo () {
    return(
        <section id='my-fav-no' style={{padding: '0px'}}>
            <div className='flex-box'>
                <div className='slide-card grid-4'>
                    <h2>
                    "My Favorite No"
                    </h2>
                    <p>
                    “My Favorite No” and other similar activities that math teachers use to foster a positive culture of error have been both a foundation and inspiration for RightOn!. Click the expand button to find out more and check out the video!
                    </p>
                </div>
                {/* <button id='expand' style={{position: 'absolute'}}>
                    <img src={expandBtn}/>
                </button> */}
                <div className='grid-8' style={{background: 'lightgrey'}}>
                    <img src='' width='100%' alt='my-favorite-no'/>
                </div>
              </div>
        </section>
    )
}

export default MyFavNo;