import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <h4><a class="navbar-brand" href="#">KredX</a></h4>
   
    <div class="justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Menu 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Menu 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Menu 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Menu 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active">Menu 5</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header