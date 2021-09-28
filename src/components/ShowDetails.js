import { Link, useParams} from "react-router-dom";
import React,{ useEffect, useState } from "react";


const ShowDetails = () => {
    
     const{id}= useParams();
  const [showDetails,setShowDetails] = useState({});
  

    useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=66fe2d4dcf98813e405cc05181238577`)
        .then((response) => response.json()) 
        .then((data) => setShowDetails(data));
    
    },[])


 return ( 
  <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "2rem", padding: "1rem", backgroundColor: "#f8f9fa" }}> 
  <div className="row g-0">
  <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
      <Link to={"/programas-television"} className="breadcrumb-item" style={{fontFamily:"Montserrat", color:"black"}}>Programas</Link>
        <li className="breadcrumb-item active" style={{fontFamily:"Montserrat", fontWeight:"bold", color:"black",}} aria-current="page">{showDetails.name}{showDetails.title}</li>
      </ol>
    </nav>
    <div className="col-md-4">
      <img src={'https://image.tmdb.org/t/p/w500/'+showDetails.poster_path} className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title" style={{fontFamily:"Montserrat", fontWeight:"bold"}} >{showDetails.title}{showDetails.name}</h1>
        <p className="card-text" style={{fontFamily:"Open Sans Regular"}} >{showDetails.overview}</p>
        <Link to={"/programas-television/"} className="btn btn-outline-success" style={{fontFamily:"Montserrat", fontWeight:"bolder"}}>Volver a Programas</Link>
      </div>
    </div>
  </div>
</div> 
     );
}

export default ShowDetails;