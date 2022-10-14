import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="container">
          <a class="navbar-brand fw-bolder fs-3 mx-auto" href="/">
            <img src="https://i.imgur.com/2JpcYpo.png" alt="Logo" width="54" height="30" class="d-inline-block align-text-top"></img>Workplace</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  <img src="https://i.imgur.com/J3EcGka.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img></a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link active" href="/reservations" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://i.imgur.com/LtTsi7A.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img></a>
              </li>
              <li class="nav-item ms-4">
                <a class="nav-link active" href="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://i.imgur.com/q7el4I3.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img></a>
              </li>
            </ul>
            <a className="btn btn-outline-primary ms-auto px-4 rounded-pill" href="/login">
              <i className="fa fa-sign-in me-2"></i>Login
            </a>
            <a className="btn btn-outline-primary ms-2 px-4 rounded-pill" href="/register">
              <i className="fa fa-user-plus me-2"></i>Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;