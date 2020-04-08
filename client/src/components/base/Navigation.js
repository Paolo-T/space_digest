import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full fixed">
            <div className="container mx-auto flex justify-between items-center pt-6 static">
                <NavLink
                    className="text-teal-300 text-2xl hover:text-black"
                    to="/"
                >
                    <img className="w-12 mr-4" src={logo} alt="nasa-logo" />
                </NavLink>

                <nav className="w-48 flex inline-block justify-between justify-end transform rotate-90 origin-top-left absolute right-0 pl-8">
                    <NavLink
                        className="text-teal-300 text-2xl hover:text-black mr-10"
                        to="/nasa"
                    >
                        Nasa
                    </NavLink>
                    <NavLink
                        className="text-teal-300 text-2xl hover:text-black mr-10"
                        to="/space-x"
                    >
                        SpaceX
                    </NavLink>
                    <NavLink
                        className="text-teal-300 text-2xl hover:text-black mr-10"
                        to="/asteroids"
                    >
                        Asteroids
                    </NavLink>
                    <NavLink
                        className="text-teal-300 text-2xl hover:text-black"
                        to="/photos-collection"
                    >
                        Photos
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
