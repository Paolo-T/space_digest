import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/base/Navigation";
import Footer from "./components/base/Footer";
import page__home from "./pages/page__home";
import page__photosPage from "./pages/page__photosPage";
import page__marsRover from "./pages/page__marsRover";
import page__spacex from "./pages/page__spacex";

function App() {
   return (
      <Router>
         <div className="App">
            <Navigation />
            <switch>
               <Route exact path="/" component={page__home} />
               <Route
                  exact
                  path="/photos-collection"
                  component={page__photosPage}
               />
               <Route path="/mars-rover" component={page__marsRover} />
               <Route path="/space-x" component={page__spacex} />
               {/* <Route component={Error} /> */}
            </switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
