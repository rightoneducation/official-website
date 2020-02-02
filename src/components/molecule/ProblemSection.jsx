import React from 'react'

import bored from 'images/student-looking-bored.jpg'

function ProblemSection () {
    return (
      <section id='problem-section' className='flex-box'>
        <div className='grid-d-6 grid-m-12'>
        <img src={bored} alt='right-on-education-stockphoto' width='100%'/>   
        </div>
        <div className='problem-card grid-d-6 grid-m-12'>
          <h3 style={{marginBottom: '20px'}}>The Problem</h3>
          <p>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</p>
        </div>
    </section>
    )
}

export default ProblemSection;