import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Peliculas from "./components/Peliculas";
import MovieDetails from "./components/MovieDetails";
import Programas from "./components/Programas";
import ShowDetails from "./components/ShowDetails";
import Personas from "./components/Personas";
import PersonasDetails from "./components/PersonasDetails";
import Trending from "./components/Trending";
import Rating from "./components/Rating";



function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/Cartelera-React-Flux">
            <Home/>
          </Route>
          <Route exact path="Cartelera-React-Flux/peliculas">
            <Peliculas/>  
          </Route>
           <Route exact path="Cartelera-React-Flux/movies/:id">
            <MovieDetails/>   
          </Route>
          <Route exact path="Cartelera-React-Flux/programas-television">
            <Programas/>     
          </Route>
          <Route exact path="Cartelera-React-Flux/show/:id">
            <ShowDetails/>   
          </Route>
         <Route exact path="Cartelera-React-Flux/personas">
            <Personas/>   
          </Route>
          <Route exact path="Cartelera-React-Flux/personas/:id">
            <PersonasDetails/>    
          </Route>
          {/* <Route exact path="/tendencias">
            <Trending/>  
          </Route> */}

          
          {/* <Route exact path="/popular">
            <RatingTv/>  
          </Route>
          <Route exact path="/popular/:idRate">
            <RateDetails/>  
          </Route>  */}
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
