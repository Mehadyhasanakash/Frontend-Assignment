import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-blue-400">
  <div class="container-fluid">
    <a class="navbar-brand">Fronend-Assignmant</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="home" class="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="link" class="nav-link">Link</Link>
        </li>
        <li class="nav-item">
          <Link to="favorites" class="nav-link">favorites</Link>
        </li>
        <li class="nav-item">
          <Link to="favorites" class="nav-link">playlist</Link>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nabvar;