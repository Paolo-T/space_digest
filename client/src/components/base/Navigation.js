import React from "react";
import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-full fixed bg-gray-100 md:bg-transparent z-10">
            <div className="container md:w-9/12 mx-auto flex justify-between py-2 md:pt-6 ">
                <NavLink className="text-teal-300" to="/">
                    <img
                        className="w-8 md:w-12 mr-4"
                        src={logo}
                        alt="nasa-logo"
                    />
                </NavLink>

                <nav className="w-2/3 md:w-1/4 flex justify-between">
                    {/* transform md:rotate-90 origin-top-left md:absolute
                    md:-right-5 */}
                    <NavLink
                        className="inline-block text-teal-300 text-xl md:text-2xl leading-normal hover:text-black"
                        to="/nasa"
                    >
                        Nasa
                    </NavLink>
                    <NavLink
                        className="inline-block text-teal-300 text-xl md:text-2xl  leading-normal hover:text-black"
                        to="/space-x"
                    >
                        SpaceX
                    </NavLink>
                    <NavLink
                        className="inline-block text-teal-300 text-xl md:text-2xl leading-normal hover:text-black"
                        to="/photo-collection"
                    >
                        Photos
                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
