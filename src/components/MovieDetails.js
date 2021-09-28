
import React, {  useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Peliculas from './Peliculas';

const MovieDetails = () => {
    const{id}= useParams();
    const [movieDetails,setMovieDetails] = useState({});
  
      useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
          .then((response) => response.json())
          .then((data) => {
            return setMovieDetails(data)
      });
      },[])
  
    
      return ( 
        <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "2rem", padding: "1rem" }}>
    <div className="row g-0">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <Link to={"/peliculas"} className="breadcrumb-item" style={{fontFamily:"Montserrat", color:"black"}}>Películas</Link>
          <li className="breadcrumb-item active" style={{fontFamily:"Montserrat", fontWeight:"bold", color:"black",}} aria-current="page">{movieDetails.title}</li>
        </ol>
      </nav>
      <div className="col-md-4">
        <img src={'https://image.tmdb.org/t/p/w500/'+movieDetails.poster_path} className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h1 className="card-title" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>{movieDetails.title}</h1>
          <p className="card-text" style={{fontFamily:"Open Sans Regular"}}>{movieDetails.overview}</p>
          <Link to={"/peliculas"} className="btn btn-outline-success" style={{fontFamily:"Montserrat", fontWeight:"bolder"}}>Volver a Películas</Link> 
        </div>
        
      </div>
    </div>
  </div> 
       );
  }
   
  export default MovieDetails;