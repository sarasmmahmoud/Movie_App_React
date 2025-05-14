import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul class="nav nav-underline">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/fav">Faviorates</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movie">Movies</Link>
      </li>
      
    </ul>
  );
}

export default NavBar;