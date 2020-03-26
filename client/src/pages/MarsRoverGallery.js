import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../components/RoverPhotos";
import curiosityRover from "../img/curiosityRover.jpg";

function MarsRoverGallery() {
   return (
      <div className="container mx-auto pt-12">
         <div className="mb-12">
            <div className="w-9/12 mx-auto max-auto">
               <h1 className="">Mars Rover</h1>
               <p className="p w-3/4 block">
                  Spirit and Opportunity landed on Mars January 3 and January
                  24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived well
                  beyond their planned 90-day missions. Opportunity worked
                  nearly 15 years on Mars and broke the driving record for
                  putting the most miles on the odometer. The twin geologists,
                  Spirit and Opportunity, have both found dramatic evidence
                  that:
               </p>
               <p className="p block mt-6">
                  Long ago Mars was wetter Conditions at Mars could have
                  sustained microbial life, if any existed With data from the
                  rovers, mission scientists have reconstructed an ancient past
                  when Mars was awash in water. Spirit and Opportunity each
                  found evidence for past wet conditions that possibly could
                  have supported microbial life.
               </p>
            </div>

            <img
               className="w-9/12 mx-auto my-16"
               src={curiosityRover}
               alt="Mars Rover"
            />
         </div>

         <div className="mb-10 mt-20">
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
