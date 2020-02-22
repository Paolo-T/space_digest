import React from "react";

function Header() {
    return (
        <header className="container mx-auto text-black text-center">
            <div className="mb-20">
                <h1 className="inline-block w-7/12 mx-auto bg-teal-300 text-7xl font-semibold leading-none mt-20 mb-10 text-left">
                    Space digest.
                </h1>
                <h2 className="w-3/4 mx-auto text-3xl leading-snug ">
                    information from space. Explore images, videos, and articles
                    of space related news. keep curious.
                </h2>
            </div>
        </header>
    );
}

export default Header;
