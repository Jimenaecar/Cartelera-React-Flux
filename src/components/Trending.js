import React, { useContext, useEffect } from 'react';
import {Link} from "react-router-dom";
import {Context} from '../store/appContext';

export const Trending = (props) => {
    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.loadTrending();
    }, []);

    console.log(store);

    return ( 
        <div className="overflow-auto col-auto row flex-nowrap cards-container p-2">
            {store.trending.length> 0 ? store.trending.map((item=>
    <div className="col-auto row card-block card-cont">
        <div className="image-container trendingSpace" style={{width: "18rem", marginTop: "2rem", overlay:"",color: "white"}}>
  <img src={'https://image.tmdb.org/t/p/w200'+item.poster_path} className="card-img-top rounded" alt="..."/>
  <div className="cardInfo card-body overlay d-flex" style={{width: "91%"}}>
  <h5 className="card-title cardText" style={{fontWeight:"bolder",color:"white"}}>{item.title}{item.name}</h5>
    <span className="cardAve">{item.vote_average}</span>
    </div>
  </div>
  </div>
  )):null}
</div>
     );
}
 
export default Trending;