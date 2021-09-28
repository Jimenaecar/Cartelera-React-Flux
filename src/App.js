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



function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/peliculas">
            <Peliculas/>  
          </Route>
           <Route exact path="/movies/:id">
            <MovieDetails/>   
          </Route>
          <Route exact path="/programas-television">
            <Programas/>     
          </Route>
          <Route exact path="/show/:id">
            <ShowDetails/>   
          </Route>
         <Route exact path="/personas">
            <Personas/>   
          </Route>
          <Route exact path="/personas/:id">
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
