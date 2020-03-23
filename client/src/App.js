import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./components/base/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import RoverPhotos from "./components/RoverPhotos";
import Asteroids from "./components/Asteroids";
import MarsRoverGallery from "./pages/MarsRoverGallery";

function App() {
   return (
      <Router>
         <div className="App">
            <Navigation />
            <switch>
               <Route path="/" component={Home} exact />
               <Route path="/About" component={About} exact />
               <Route path="/MarsRoverGallery" component={MarsRoverGallery} />
               {/* <Route component={Error} /> */}
            </switch>
         </div>
      </Router>
   );
}

export default App;
