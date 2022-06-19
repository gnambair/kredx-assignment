import React from 'react'
import './Description.css';
import invoice1 from './invoice1.svg';
import invoice2 from './invoice2.svg';
import invoice3 from './invoice3.svg';
import invoice4 from './invoice4.svg';
import invoice5 from './invoice5.svg';
import invoice6 from './invoice6.svg';

function Description() {
  return (
   <section className="body_section">
    <div className="paddng_body">

        <h1 className="my-5 text-center">Why <span className="green_text">KredX</span> For<br/> Invoice Discounting</h1>

        <div className="three_colum1">
            <div className="me-3 width_colum">
                <img className='pad_bot1' src={invoice1} alt="" />
                <h6 className='text_height'>Quick verification and cash flow</h6>
                <p>hello</p>

            </div>

            <div className="me-3 width_colum">
            <img className='pad_bot1' src={invoice2} alt="" />
            <h6 className='text_height'>Risk-free Assets</h6>
                <p>hello</p>
                </div>

                <div className="third_column width_colum">
                <img className='pad_bot1' src={invoice3} alt="" />
                <h6 className='text_height'>Avoid New Debt</h6>
                <p>hello</p>
                </div>
        </div>

        <div className="three_colum2">
            <div className="me-3 width_colum">
                <img className='pad_bot1' src={invoice4} alt="" />
                <h6 className='text_height'>Real-time Updates</h6>
                <p>hello</p>

            </div>

            <div className="me-3 width_colum">
            <img className='pad_bot1' src={invoice5} alt="" />
            <h6 className='text_height'>Paperless Process</h6>
                <p>hello</p>
                </div>

                <div className="third_column width_colum">
                <img className='pad_bot1' src={invoice6} alt="" />
                <h6 className='text_height'>End-to-End Management</h6>
                <p>hello</p>
                </div>
        </div>

    </div>
   </section>
  )
}

export default Description