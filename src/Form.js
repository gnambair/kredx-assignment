import React from 'react'
import './Form.css';


function Form() {
  return (
    <div className="bg_section">
<div className="padding align-items-center">

     <div class="card card_align">
  
  <div class="card-body">

    <div className="card1">
    <h5 class="card-title">Lorem ipsum is simply dummy</h5>
    <p class="card-text">text of the printing and typesetting industry</p>
    </div>

    <div class="card-body card2 border-r">

<div>
<div class="dropdown dp-d bg-light border-r">
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Industry menu
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div class="d-grid gap-2 d-md-block  pad_top1">
  <button class="btn bg-light bt_width text-left" type="button">Invoice value</button>
  <button class="btn bg-light to_right bt_width text-left" type="button">Tenure</button>
</div>
</div>
</div>

<div className="l_button pad_top2">
<button type="button" class="btn btn-outline-primary to_right" disabled>Primary button</button>
</div>

  </div>
  
</div>
</div>
    </div>
  )
}

export default Form