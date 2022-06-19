import React from 'react'
import './Details.css'


function Details() {
  return (
    <section className="body_section bg-black">
    <div className="paddng_body1">

        <h3 className="text-center text-light mb-4">HELPING BUSINESS OWNERS SINCE 2015</h3>

        <div className="three_colum1">
            <div className="first_column width_colum border-bottom border-light border-opacity-10 me-3">
              
                <h6 className='text-light'>1 Million</h6>
                <p className='text-success pb-4'>Invoices Discounted</p>

            </div>

            <div className="second_column width_colum border-bottom border-light border-opacity-10 me-3">
          
             <h6 className='text-light'>$4 Billion</h6>
                <p className='text-success'>Transaction Value Processed</p>
                </div>

                <div className="third_column width_colum border-bottom border-light border-opacity-10">
              
                 <h6 className='text-light'>2 Million</h6>
                <p className='text-success'>Transactions Processed till Date</p>
                </div>
        </div>

        <div className="three_colum2">
            <div className="first_column width_colum border-bottom border-light border-opacity-10 me-3">
              
                 <h6 className='text-light'>23,000+</h6>
                <p className='text-success'>Businesses Helped</p>

            </div>

            <div className="second_column width_colum border-bottom border-light border-opacity-10 me-3">
          
             <h6 className='text-light'>70,000+</h6>
                <p className='text-success'>New & Returning Investors</p>
                </div>

                <div className="third_column width_colum border-bottom border-light border-opacity-10">
           
                 <h6 className='text-light'>225+</h6>
                <p className='text-success'>Corporates on KredX Platform</p>
                </div>
        </div>

    </div>
   </section>
  )
}

export default Details