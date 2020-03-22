import React from "react";
import "./css/styles.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/base/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
   return (
      <BrowserRouter>
         <div>
            <Navigation />
            <switch>
               <Route path="/" component={Home} exact />
               <Route path="/About" component={About} />
               {/* <Route component={Error} /> */}
            </switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
