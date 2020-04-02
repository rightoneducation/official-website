import React from 'react'
import righton from 'righton.svg'

function Footer () {
    return (
      <footer className='wrapper' id='footer'>
          <div className='footer-msg'>
            <h1 style={{fontWeight: '300'}}>Interested in learning more? Email us at <br/> <a href="mailto:info@rightoneducation.com" className='email-us'><b>info@rightoneducation.com</b></a></h1>
          </div>
          <div className='footer-logo'>
            <a href='/'><img src={righton} width='100%' alt='RightOn logo' /></a>
          <div>
          <p className='copyright-msg'>RightOn Education &copy; 2020 All Rights Reserved</p>
          </div>
          </div>
      </footer>
    )
}

export default Footer;