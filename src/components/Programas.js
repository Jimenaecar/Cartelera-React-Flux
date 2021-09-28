import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";
import {Context} from '../store/appContext';

export const Programas = (props) => {
    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadProgramas();
    }, []);

    console.log(store);
    
    return ( 
        
        <div className="section" style={{margin: "3rem", marginTop:"0.5rem",marginBottom:"1rem" ,padding: "3rem" }}>
            {store.programas.length > 0 ? store.programas.map((item=>
            <div className="col-lg-3 col-auto">
            <div className="card image-container" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+item.poster_path} className="card-img-top" alt=""/> 
            <div className="card-body cardInfo overlay d-flex align-items-center">
              <Link style={{textDecoration: 'none', color:"white" }} to={"/show/"+item.id}> <h5 className="card-title cardText" style={{fontWeight:"bolder"}}>{item.title}{item.name}</h5></Link> 
                <span className="card-text cardAve"> {item.vote_average}</span>
                
            </div>
          </div>
        </div>
           )):null}
        </div>

        

     );
     
}
 
export default Programas;