import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container w-full mx-auto h-24 bg-teal-300 flex items-center px-6 mb-8">
            <div className="w-full flex items-center justify-between ">
                <Link className="block text-black text-2xl" to="/about">
                    About
                </Link>
                <span className="text-xl leading-snug align-baseline">
                    hey@spacedigest.live
                </span>
            </div>
        </footer>
    );
}

export default Footer;
