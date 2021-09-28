import React, {  useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PersonasDetails = () => {
    const{id}= useParams();
  const [personasDetails,setPersonasDetails] = useState({});
  
      useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/person/${id}?api_key=66fe2d4dcf98813e405cc05181238577`)
            .then((response) => response.json()) 
            .then((data) => setPersonasDetails(data));
                
          },[])
  
    
      return ( 
        <div className="card mb-3 cardPeople shadow-lg p-3 mb-5 bg-body rounded" style={{margin: "2rem", padding: "1rem"}}>
  <div className="row g-0">
  <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
      <Link to={"/personas"} className="breadcrumb-item" style={{fontFamily:"Montserrat", color:"black"}}>Personas</Link>
        <li className="breadcrumb-item active" style={{fontFamily:"Montserrat", fontWeight:"bold", color:"black",}} aria-current="page">{personasDetails.name}</li>
      </ol>
    </nav>
    <div className="col-md-4">
      <img src={'https://image.tmdb.org/t/p/w500/'+personasDetails.profile_path} className="img-fluid rounded-start" style={{width: "100%"}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title" style={{fontFamily:"Montserrat", fontWeight:"bold"}}>{personasDetails.name}</h1>
        <p className="card-text" style={{fontFamily:"Open Sans Regular"}}>{personasDetails.biography}</p>
        <Link to={"/personas/"} className="btn btn-outline-success" style={{fontFamily:"Montserrat", fontWeight:"bolder"}}>Volver a Personas</Link>
      </div>
    </div>
  </div>
</div> 
     );

 }

 export default PersonasDetails;