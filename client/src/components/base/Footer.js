import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container mx-auto h-24 bg-teal-300 flex flex-col md:flex-row justify-between items-center py-4 px-10 mb-8">
            <Link className="block text-2xl mb-5 underline" to="/about">
                About
            </Link>
            <div className="block text-2xl leading-snug">
                <a href="mailto:webmaster@example.com">hey@spacedigest.live</a>
            </div>
        </footer>
    );
}

export default Footer;
