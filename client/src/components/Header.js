import React from "react";
import bannerImg from "../img/main-banner.svg";
import VideoFeatured from "./base/VideoFeatured";

function Header() {
    return (
        <header className="container-xl mx-auto text-center">
            <div className="mb-8 md:mb-12 pt-12 md:pt-16">
                <h1 className="tracking-tight bg-teal-300">Space digest</h1>
                <h3 className="w-4/5 md:w-3/5 mb-2 mx-auto">
                    "Space is for everybody. It's not just for a few people in
                    science or math, or for a select group of astronauts. That's
                    our new frontier out there, and it's everybody's business to
                    know about space."
                </h3>
                <span className="span text-xs md:text-base text-gray-600 mt-0">
                    CHRISTA MCAULIFFE, 1985
                </span>
            </div>

            <VideoFeatured
                className="w-full mx-auto"
                width="100vw"
                height="46vw"
                url="https://www.youtube.com/watch?v=Ilifg26TZrI"
            />
        </header>
    );
}

export default Header;
