import { NavLink } from "react-router-dom";

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h3>Task Train</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to='/tasks' class="nav-link" >Tasks</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/tasks/new' class="nav-link" >New Task</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/' class="nav-link" >Signup</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to='/login' class="nav-link" >Login</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
     );
}

export default Navbar;