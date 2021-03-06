import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";
import {Context} from '../store/appContext';



export const Personas = (props) => {
    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadPersonas();
    }, []);

    console.log(store);
    
    return ( 
        
        <div className="section" style={{margin: "3rem", marginTop:"0.5rem",marginBottom:"1rem" ,padding: "3rem" }}>
            {store.personas.length> 0 ? store.personas.map((item=>
            <div className="col-lg-3 col-auto">
            <div className="card image-container" style={{width: "18rem"}}>
                <img src= {'https://image.tmdb.org/t/p/w500/'+item.profile_path} className="card-img-top" alt=""/> 
            <div className="card-body cardInfo overlay d-flex align-items-center">
              <Link style={{textDecoration: 'none', color:"white" }} to={"/personas/"+item.id}> <h5 className="card-title cardText" style={{fontWeight:"bolder"}}>{item.name}</h5></Link>
                
            </div>
          </div>
        </div>
           )):null}
        </div>

        

     );
     
}

 
export default Personas;