import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full fixed bg-gray-100 z-10">
            <div className="container mx-auto flex justify-between py-2 md:pt-6 ">
                <NavLink className="text-teal-300" to="/">
                    <img
                        className="w-8 md:w-12 mr-4"
                        src={logo}
                        alt="nasa-logo"
                    />
                </NavLink>

                <nav className="md:w-48 flex content-end inline-block justify-between transform md:rotate-90 origin-top-left sm:absolute -right-5 pl-8">
                    <NavLink
                        className="text-teal-300 text-2xl md:text-3xl leading-normal hover:text-black mr-10 "
                        to="/nasa"
                    >
                        Nasa
                    </NavLink>
                    <NavLink
                        className="text-teal-300 text-2xl md:text-3xl  leading-normal hover:text-black mr-1 md:mr-10"
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
