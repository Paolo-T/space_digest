import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from "./components/base/Navigation";
import Footer from "./components/base/Footer";
import Home from "./pages/Home";
import PhotosPage from "./pages/PhotosPage";
import RoverPhotos from "./components/RoverPhotos";
import Asteroids from "./components/Asteroids";
import MarsRoverGallery from "./pages/MarsRoverGallery";

function App() {
   return (
      <Router>
         <div className="App">
            <Navigation />
            <switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/PhotosPage" component={PhotosPage} />
               <Route path="/MarsRoverGallery" component={MarsRoverGallery} />
               {/* <Route component={Error} /> */}
            </switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
