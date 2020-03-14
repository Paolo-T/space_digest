import React from "react";
import bannerImg from "../img/main-banner.svg";
function Header() {
   return (
      <header className="container mx-auto text-black text-center">
         <div className="mb-12">
            <h1 className="inline-block w-7/12 mx-auto text-7xl font-semibold leading-none tracking-tight  mt-20 mb-10 text-left">
               Space digest.
            </h1>
            <h2 className="w-3/4 mx-auto text-3xl leading-snug ">
               "Space is for everybody. It's not just for a few people in
               science or math, or for a select group of astronauts. That's our
               new frontier out there, and it's everybody's business to know
               about space."
            </h2>
            <p className="pt-3">CHRISTA MCAULIFFE, December 6, 1985</p>
         </div>
         <img className="w-full mb-12" src={bannerImg} alt="space-banner" />
      </header>
   );
}

export default Header;
