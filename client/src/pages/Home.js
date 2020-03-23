import React from "react";
import Header from "../components/Header";
import Asteroids from "../components/Asteroids";
import Media from "../components/Media";
import MarsWeather from "../components/MarsWeather";
import RoverPhotos from "../components/RoverPhotos";
import SimpleReactLightbox from "simple-react-lightbox";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div>
         <div className="">
            <Header />

            {/* <Asteroids /> */}

            {/* <SimpleReactLightbox>
               <Media />
            </SimpleReactLightbox> */}

            {/* <MarsWeather /> */}

            <div className="container mx-auto flex pr-30 py-10 text-left">
               <div className="w-1/3 inline-block flex-1 bg-teal-300 rounded-sm text-5xl font-bold pl-5 pt-5"></div>
               <div className="w-2/3 pl-10">
                  <h2 className="inline-block flex-1 rounded-sm text-5xl font-bold pt-5">
                     Mars Rover
                  </h2>

                  <p className="w-5/6 text-2xl font-light">
                     Spirit and Opportunity landed on Mars January 3 and January
                     24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived
                     well beyond their planned 90-day missions. Opportunity
                     worked nearly 15 years on Mars and broke the driving record
                     for putting the most miles on the odometer. The twin
                     geologists, Spirit and Opportunity, have both found
                     dramatic evidence that: Long ago Mars was wetter Conditions
                     at Mars could have sustained microbial life, if any existed
                     With data from the rovers, mission scientists have
                     reconstructed an ancient past when Mars was awash in water.
                     Spirit and Opportunity each found evidence for past wet
                     conditions that possibly could have supported microbial
                     life.
                     <Link
                        className="block text-teal-300 text-2xl hover:text-black underline pt-12"
                        to="/MarsRoverGallery"
                     >
                        Check Curiosity's Rover pictures from Mars
                     </Link>
                  </p>
               </div>
            </div>

            {/* <SimpleReactLightbox>
               <RoverPhotos />
            </SimpleReactLightbox> */}
         </div>
      </div>
   );
}

export default Home;
