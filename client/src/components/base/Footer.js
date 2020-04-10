import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container mx-auto h-24 bg-teal-300 flex flex-col md:flex-row justify-between items-center py-4 mb-8">
            <Link className="block text-2xl mb-5underline" to="/about">
                About
            </Link>
            <span className="block text-2xl leading-snug">
                hey@spacedigest.live
            </span>
        </footer>
    );
}

export default Footer;
