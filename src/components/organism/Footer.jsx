import React from 'react'
import righton from '../../righton.svg'

function Footer () {
    return (
      <footer id='footer'>
        <div className='footer'>
          <p className='copyright-msg'>RightOn Education &copy; 2018 All Rights Reserved</p>
          <div className='footer-logo'>
            <a href='/'><img src={righton} width='100%' alt='RightOn logo' /></a>
          </div>
          <div className='footer-msg'>
            <h3><b>Interested in learning more?</b><br/> Email us at <a href="mailto:info@rightoneducation.com" className='email-us'>info@rightoneducation.com</a></h3>
          </div>
        </div>
      </footer>
    )
}

export default Footer;