import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../components/RoverPhotos";
import curiosityRover from "../img/curiosityRover.jpg";

function MarsRoverGallery() {
   return (
      <div className="container mx-auto pt-10">
         <div className="mb-12">
            <h1 className="w-9/12 mx-auto block mb-6">Mars Rover</h1>
            <div className=" p w-9/12 mx-auto text-left">
               <p>
                  Spirit and Opportunity landed on Mars January 3 and January
                  24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived well
                  beyond their planned 90-day missions.
               </p>
               <p>
                  Opportunity worked nearly 15 years on Mars and broke the
                  driving record for putting the most miles on the odometer.The
                  twin geologists, Spirit and Opportunity, have both found
                  dramatic evidence that: Long ago Mars was wetter Conditions at
                  Mars could have sustained microbial life, if any existed With
                  data from the rovers, mission scientists have reconstructed an
                  ancient past when Mars was awash in water.
               </p>
               <p>
                  Spirit and Opportunity each found evidence for past wet
                  conditions that possibly could have supported microbial life.
               </p>
            </div>

            <img
               className="w-9/12 mx-auto mt-20 mb-10"
               src={curiosityRover}
               alt="Mars Rover"
            />
         </div>

         <div className="mb-10 mt-20">
            <div className="flex pr-30 mb-10 mt-10 text-left">
               <div className="w-9/12 mx-auto">
                  <h2 className="w-2/3 line-block flex-1 ">
                     Shots from Curiosity Mars rover (Mast camera)
                  </h2>
                  <p className="w-4/5 text-2xl font-light">
                     NeoWs (Near Earth Object Web Service) is a web service for
                     near earth Asteroid information. With NeoWs we can display
                     Asteroids based on their closest approach date to Earth.
                  </p>
               </div>
            </div>
            <div className="flex pr-30 mb-10 mt-16 text-left">
               <div className="w-9/12 mx-auto pt-6">
                  <SimpleReactLightbox>
                     <RoverPhotos />
                  </SimpleReactLightbox>
               </div>
            </div>
         </div>
      </div>
   );
}

export default MarsRoverGallery;
