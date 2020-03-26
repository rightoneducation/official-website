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
                    “My Favorite No” and other similar math classroom activities have been both a foundation and inspiration for <b><em>RightOn!</em></b>. Watch the video to learn more!

                    </p>
                </div>
                {/* <button id='expand' style={{position: 'absolute'}}>
                    <img src={expandBtn}/>
                </button> */}
                <div className='slide-image grid-d-8' style={{background: 'lightgrey'}}>
                    <iframe width="100%" height="550" src="https://www.youtube.com/embed/srJWx7P6uLE" title="My Fav No" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <img src='' width='100%' alt='my-favorite-no'/> */}
                </div>
              </div>
        </section>
    )
}

export default MyFavNo;