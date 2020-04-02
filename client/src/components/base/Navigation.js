import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
   return (
      <div className="w-full fixed">
         <div className="container mx-auto flex justify-between items-center pt-6">
            <NavLink className="text-teal-300 text-2xl hover:text-black" to="/">
               <img className="w-12 mr-4" src={logo} alt="nasa-logo" />
            </NavLink>

            <nav className="w-1/6 flex justify-between justify-end ">
               <NavLink
                  className="text-teal-300 text-2xl hover:text-black"
                  to="/photos-collection"
               >
                  Photos
               </NavLink>
               <NavLink
                  className="text-teal-300 text-2xl hover:text-black"
                  to="/space-x"
               >
                  SpaceX
               </NavLink>
            </nav>
         </div>
      </div>
   );
}

export default Navigation;
