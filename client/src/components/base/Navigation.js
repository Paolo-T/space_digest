import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
   return (
      <div className="w-full fixed">
         <div className="container mx-auto flex justify-between items-center pt-6">
            <img className="w-12 mr-4" src={logo} alt="nasa-logo" />

            <div className="w-1/6 flex justify-between ">
               <NavLink
                  className="text-teal-300 text-2xl hover:text-black"
                  to="/"
               >
                  Home
               </NavLink>
               <NavLink
                  className="text-teal-300 text-2xl hover:text-black"
                  to="/About"
               >
                  About
               </NavLink>
            </div>
         </div>
      </div>
   );
}

export default Navigation;
