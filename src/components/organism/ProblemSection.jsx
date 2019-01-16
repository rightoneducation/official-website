import React from 'react'
import mathHomework from '../../images/math-homework2.jpg'
import xIcon from '../../images/straight_blue_X_icon.svg';

function ProblemSection () {
    return (
      <section className='problem'>
        <div className='problem-card'>
          <h2><img src={xIcon} width='10%' className='about-icons' alt='product feature' />The Problem</h2>
          <h3>Math, ugh! Many students feel that math is all about tests, grades, homework, and getting correct answers... What if we could flip things around and make math more about learning from mistakes and even having fun? Give <b><em>RightOn!</em></b> a try and find out how!</h3>
        </div>
        <div className='mission-image'>
          <img src={mathHomework} alt="CHANGE IMAGE" width='100%' />
        </div>
      </section>
    )
}

export default ProblemSection;