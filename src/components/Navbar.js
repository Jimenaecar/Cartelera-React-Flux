import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 

<nav className="navbar navbar-expand-lg bg-dark" style={{fontFamily:"Montserrat"}}>
  <div className="container-fluid">
  <a className="navbar-brand"><Link to="/" className="text-white" className="navText" href="">CinemaBox</Link></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <a className="nav-link active"> <Link to="/peliculas" className="nav-link active text-white" className="navText" href="#">Películas</Link> </a>
        </li>
        <li className="nav-item">
        <a className="nav-link"> <Link to="/programas-television" className="nav-link active" className="navText" aria-current="page" href="#">Programas</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link"><Link to="/personas" className="nav-link" className="navText" href="#">Personas</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link"><Link to="/tendencias" className="nav-link " className="navText" href="#">Trending</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>        
     );
}
 
export default Navbar;
