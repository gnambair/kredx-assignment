import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section className="body_section bg-light">
    <div className="paddng_body2">

        <h3 className="text-center mb-4">CONTACT US</h3>

        <div className="four_column">
            <div className="first_column me-3">
              
                <p className='text_center_align'>INDIA</p>
                <h5 className='text-secondary pb-4 text_center_align'>1800 419 4919</h5>

            </div>

            <div className="second_column me-3">
          
             <p className='text_center_align'>OUTSIDE INDIA</p>
                <h5 className='text-secondary text_center_align'>+91-8061799200</h5>
                </div>

                <div className="third_column me-3">
              
                 <p className='text_center_align'>GLOBAL EMAIL</p>
                <h5 className='text-secondary text_center_align'>info@kredx.com</h5>
                </div>

                <div className="fourth_column">
              
              <p className='text_center_align'>FOR MEDIA ENQUIRIES</p>
             <h5 className='text-secondary text_center_align'>pr@kredx.com</h5>
             </div>
        </div>

        

    </div>
   </section>
  )
}

export default Contact