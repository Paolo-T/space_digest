import React from "react";
import bannerImg from "../img/main-banner.svg";
import VideoFeatured from "./VideoFeatured";
import { Link } from "react-router-dom";

function Header() {
   return (
      <header className="container mx-auto text-center">
         <div className="mb-12 pt-16">
            <h1 className="bg-teal-300">Space digest.</h1>
            <h3 className="w-3/4 mx-auto ">
               "Space is for everybody. It's not just for a few people in
               science or math, or for a select group of astronauts.<br></br>
               That's our new frontier out there, and it's everybody's business
               to know about space."
            </h3>
            <span className="span">CHRISTA MCAULIFFE, December 6, 1985</span>
            {/* <img
               className="w-full mt-20 mb-10"
               src={bannerImg}
               alt="space-banner"
            /> */}
         </div>
         <Link
            className="text-teal-300 text-2xl hover:text-black"
            to="/MarsRoverGallery"
         >
            Mars Rover
         </Link>

         <VideoFeatured url="https://www.youtube.com/watch?v=Ilifg26TZrI" />
      </header>
   );
}

export default Header;
