import React, { useState, useEffect } from 'react';
import Carrousel from "../components/Carrousel"
import Trending from '../components/Trending';
import Rating from '../components/Rating';

const Home = () => {
        const [home,setHome]= useState([]);
        
        useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=66fe2d4dcf98813e405cc05181238577`)
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
            <div className= "m-0 overflow-auto" style={{display:"flex",flexDirection:"row"}}> 
            <Trending/>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row rowCard">
          <h4 className="row" style={{fontWeight:"bold"}}>Series con Mejor Rating</h4>
            <div className= "m-0 overflow-auto" style={{display:"flex",flexDirection:"row"}}> 
            <Rating/>
            </div>
          </div>
        </div>
        </div>
      );
}

export default Home; 