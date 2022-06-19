import React from 'react';
import ftr_logo from './sap-footer-logo.svg';
import './Footer.css'

function Footer() {
  return (
   <section className="body_section bg-black">
    <div className="padding_body2">

        

        <div className="footer_sec">
            <div className="first_column me-3">
              
            <img className='ftr_logo' src={ftr_logo} alt="" />

            </div>

            <div className="first_column me-3">
              
              <p className='text-light'>&copy;2022 Minions Ventures Pvt Ltd</p>
              

          </div>

          
        </div>

        

    </div>
   </section>
  )
}

export default Footer