import React from 'react'

function MyFavNo () {
    return(
        <section id='my-fav-no' style={{padding: '0px'}}>
            <div className='slide-card flex-box reverse'>
                <div className='slide-content grid-d-4'>
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
                <div className='slide-image grid-d-8' style={{background: 'lightgrey'}}>
                    <iframe width="100%" height="700" src="https://www.youtube.com/embed/srJWx7P6uLE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <img src='' width='100%' alt='my-favorite-no'/> */}
                </div>
              </div>
        </section>
    )
}

export default MyFavNo;