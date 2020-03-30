import React from "react";
import Header from "../components/Header";
import Asteroids from "../components/Asteroids";
import Media from "../components/Media";
import MarsWeather from "../components/MarsWeather";
import RoverPhotos from "../components/RoverPhotos";
import SimpleReactLightbox from "simple-react-lightbox";
import curiosityRoverColor from "../img/curiosityRoverColor.jpg";
import { Link } from "react-router-dom";

function Home() {
   return (
      <div>
         <div>
            <Header />

            {/* <Asteroids /> */}

            {/* <SimpleReactLightbox>
               <Media />
            </SimpleReactLightbox> */}

            {/* <MarsWeather /> */}

            <div className="container mx-auto pr-30 my-24 text-left">
               <div className="w-9/12 mx-auto">
                  <div>
                     <h2 className="">Mars Rover</h2>
                     <p className="p w-3/4 block">
                        Spirit and Opportunity landed on Mars January 3 and
                        January 24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both
                        rovers lived well beyond their planned 90-day missions.
                        Opportunity worked nearly 15 years on Mars and broke the
                        driving record for putting the most miles on the
                        odometer. The twin geologists, Spirit and Opportunity,
                        have both found dramatic evidence that:
                     </p>
                     <p className="p block mt-6">
                        Long ago Mars was wetter Conditions at Mars could have
                        sustained microbial life, if any existed With data from
                        the rovers, mission scientists have reconstructed an
                        ancient past when Mars was awash in water. Spirit and
                        Opportunity each found evidence for past wet conditions
                        that possibly could have supported microbial life.
                     </p>
                  </div>
                  <button class="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-black hover:border-transparent hover:border-black rounded mt-12">
                     <Link
                        className="block text-black text-2xl"
                        to="/MarsRoverGallery"
                     >
                        Check Curiosity's Rover pictures from Mars
                     </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
