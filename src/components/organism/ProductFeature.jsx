import React from 'react'

import xCard from '../../images/win_mistake.svg';
import xIcon from '../../images/magenta_straight_X_icon.svg';
import progressIcon from '../../images/progress_icon.svg';
import giftIcon from '../../images/gift.svg';

function ProductFeature () {
    return (
      <section id='features' className='product-features'>
        <div className='section-intro'>
          <h2><img src={xIcon} width='8%' className='about-icons' alt='product feature' />
          Product Features</h2>
        </div>
        <div className='col-wrapper grid-d-8'>
          <div className='single-col'>
            <div className='feature-images'>
              <center><img src={xCard} width='100%' className="App-logo" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
            </div>
            <h4 className='feature-title'>Have Fun with Wrong Answers</h4>
            <p>Yep, that’s right! We show you one or more ways to come up with the right answer to an everyday math problem. Your goal: to come up with a wrong answer, maybe one that you thought was right!</p>
          </div>
          <div className='single-col'>
            <div className='feature-images'>
              <center><img src={giftIcon} width='80%' className="App-logo" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
            </div>
            <h4 className='feature-title'>Win Prizes</h4>
            <p>Win cool stuff for not only yourself, but also your school and community. When you win, you get to choose!</p>
          </div>
          <div className='single-col'>
            <div className='feature-images'>
              <center><img src={progressIcon} width='80%' className="App-logo" alt="Icons made by Freepik from Flaticon is licensed by CC 3.0 BY" /></center>
            </div>
            <h4 className='feature-title'>Track Your Progress</h4>
            <p>We’ll help you keep track of what questions you’re good at, and which ones you may want to brush up on. See your own improvement over time!</p>
          </div>
        </div>
      </section>
    )
}

export default ProductFeature;