import React from "react";
import bannerImg from "../img/main-banner.svg";
import VideoFeatured from "./base/VideoFeatured";

function Header() {
    return (
        <header className="container mx-auto text-center">
            <div className="mb-12 pt-16">
                <h1 className="tracking-tight bg-teal-300">Space digest</h1>
                <h3 className="w-3/5 mx-auto">
                    "Space is for everybody. It's not just for a few people in
                    science or math, or for a select group of astronauts. That's
                    our new frontier out there, and it's everybody's business to
                    know about space."
                </h3>
                <span className="span text-gray-600">
                    CHRISTA MCAULIFFE, 1985
                </span>
                {/* <img
               className="w-full mt-20 mb-10"
               src={bannerImg}
               alt="space-banner"
            /> */}
            </div>

            <VideoFeatured
                width={1280}
                height={720}
                url="https://www.youtube.com/watch?v=Ilifg26TZrI"
            />
        </header>
    );
}

export default Header;
