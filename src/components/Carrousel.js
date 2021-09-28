
 const Carousel = (props) => {
    const {home} = props;
    
    return ( 
      <div className="carouselHome">
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
   <div className="carousel-inner">
     {home.map((item,index)=>
     index ===0?
     <div className="carousel-item active">
       <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path} className="d-block w-100" alt="..." />
       <div className="carousel-caption d-none d-md-block">
       </div>
     </div>:
     <div className="carousel-item">
     <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}  className="d-block w-100" alt="..." />
     <div className="carousel-caption d-none d-md-block">
     </div>
   </div>)}

     
     <div className="carousel-item">
       <img src="..." className="d-block w-100" alt="..." />
       <div className="carousel-caption d-none d-md-block">
       </div>
     </div>
   </div>
   
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Anterior</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Siguiente</span>
   </button>
  </div>
  </div>
     );
     }
   
  export default Carousel;