import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../components/RoverPhotos";
import curiosityRover from "../img/curiosityRover.jpg";

function MarsRoverGallery() {
   return (
      <div className="container mx-auto text-center pt-10">
         <div className="mb-12 pt-10">
            <h1 className="">Mars Rover</h1>
            <h3 className=" p w-2/3 mx-auto ">
               Spirit and Opportunity landed on Mars January 3 and January 24,
               2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived well beyond
               their planned 90-day missions.<br></br>
               <br></br>Opportunity worked nearly 15 years on Mars and broke the
               driving record for putting the most miles on the odometer.The
               twin geologists, Spirit and Opportunity, have both found dramatic
               evidence that: Long ago Mars was wetter Conditions at Mars could
               have sustained microbial life, if any existed With data from the
               rovers, mission scientists have reconstructed an ancient past
               when Mars was awash in water.<br></br>
               <br></br>Spirit and Opportunity each found evidence for past wet
               conditions that possibly could have supported microbial life.
            </h3>

            <img
               className="w-full mt-20 mb-10"
               src={curiosityRover}
               alt="Mars Rover"
            />
         </div>

         <SimpleReactLightbox>
            <RoverPhotos />
         </SimpleReactLightbox>
      </div>
   );
}

export default MarsRoverGallery;
