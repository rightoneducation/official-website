import React from 'react'

function AboutPage () {
    return (
        <div>
        <section className='mission-section' id='our-mission'>
        <div className='mission-image grid-d-12'>
          <img  src='images/diversity-placeholder-image.jpg' />
        </div>
        <div className='mission-card'>
          <h2>Our Vision</h2>
          <p>
          In the future, we envision RightOn! to become a multi-channel learning platform (spanning mobile apps, livestream video, and TV), one that eventually helps connect students of all ages and backgrounds to learn new subjects – from math today to others in the future.
          </p>
        </div>
      </section>
      <section>
          <h2>
              "The most valuable thing you can make is a mistake - you can't learn anything from being perfect." 
            </h2>
      </section>
      <section className='quote'>
          <h2>
             Positive Culture of Error
            </h2>
            <p>
                RightOn! creates a simple way for math teachers to foster a positive culture of error: increasing engagement and building self-confidence through an app-based activity that surfaces mistakes and misconceptions in a safe, fun environment. Click the expand button to find out more!
            </p>
      </section>
      <section>
          <h2>
              "My Favorite No"
            </h2>
            <p>
                “My Favorite No” and other similar activities that math teachers use to foster a positive culture of error have been both a foundation and inspiration for RightOn!. Click the expand button to find out more and check out the video!
            </p>
      </section>
      <section>
            <p>
            We are a diverse group of people who are passionate about education and technology!
            </p>
            <button>Meet the Team</button>
      </section>
    </div>
    )
}

export default AboutPage;