import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full fixed">
            <div className="w-11/12 sm:container mx-auto flex justify-between items-center pt-4 md:pt-6 static">
                <NavLink className="text-teal-300" to="/">
                    <img
                        className="w-6 md:w-12 mr-4"
                        src={logo}
                        alt="nasa-logo"
                    />
                </NavLink>

                <nav className="md:w-48 flex content-end inline-block justify-between transform md:rotate-90 origin-top-left sm:absolute -right-5 pl-8">
                    <NavLink
                        className="text-teal-300 text-xl md:text-3xl hover:text-black mr-10"
                        to="/nasa"
                    >
                        Nasa
                    </NavLink>
                    <NavLink
                        className="text-teal-300 text-xl md:text-3xl hover:text-black mr-1 md:mr-10"
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
