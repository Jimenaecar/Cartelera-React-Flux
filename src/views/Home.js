import React, { useState, useEffect } from 'react';
import Carrousel from "../components/Carrousel"

const Home = () => {
        const [home,setHome]= useState([]);
        
        useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY_TMDB}`)
          .then(response => response.json())
          .then((data) => setHome(data.results));
         
          
      },[]);

    return ( 
        <div className="container-fluid">
          <div className="">
            <Carrousel home={home}/>
          </div>
          <div className="row m-5 rowCard">
            <div className="row">
            <h4 className="row" style={{fontWeight:"bold"}}>Películas en Tendencia</h4>
            <div className= "m-0" style={{display:"flex",flexDirection:"row"}}> 
            {/* <Trending/> */}
            </div>
          </div>
          <br/>
          <div className="row rowCard">
          <h4 className="row" style={{fontWeight:"bold"}}>Series con Mejor Rating</h4>
            <div className= "m-0" style={{display:"flex",flexDirection:"row"}}> 
            {/* <RatingTv/> */}
            </div>
          </div>
        </div>
        </div>
      );
}

export default Home; 