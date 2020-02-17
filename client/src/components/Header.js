import React from "react";
import img from "../img/milky-way.jpg";

function Header() {
    return (
        <header
            className="container mx-auto text-black"
            // style={{ backgroundImage: `url(${img})` }}
        >
            <div className="flex justify-between items-center">
                <h3>Space</h3>
                <h3>Digest</h3>
            </div>

            <div className="">
                <h1 className="w-100 text-7xl font-semibold leading-none mt-16 mb-6">
                    Space digest.
                </h1>
                <h3 className="text-2xl font-light leading-snug mb-8">
                    News from space and to space.
                </h3>
            </div>
        </header>
    );
}

export default Header;
