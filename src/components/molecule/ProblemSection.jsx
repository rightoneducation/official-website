import React from 'react'

import bored from 'images/student-looking-bored.jpg'

function ProblemSection () {
    return (
      <section className='flex-box'>
        <img src={bored} className='segment-image' width='100%'/>   
        <div className='problem-card'>
          <h3>The Problem</h3>
          <p>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</p>
        </div>
    </section>
    )
}

export default ProblemSection;