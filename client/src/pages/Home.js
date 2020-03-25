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
         <div className="">
            <Header />

            <Asteroids />

            <SimpleReactLightbox>
               <Media />
            </SimpleReactLightbox>

            <MarsWeather />

            <div className="container mx-auto pr-30 pb-12 pt-12 text-left">
               <div className="w-9/12 mx-auto">
                  <h2 className="">Mars Rover</h2>
                  <p className="w-3/4 text-2xl font-light">
                     Spirit and Opportunity landed on Mars January 3 and January
                     24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived
                     well beyond their planned 90-day missions. Opportunity
                     worked nearly 15 years on Mars and broke the driving record
                     for putting the most miles on the odometer. The twin
                     geologists, Spirit and Opportunity, have both found
                     dramatic evidence that:<br></br>Long ago Mars was wetter
                     Conditions at Mars could have sustained microbial life, if
                     any existed With data from the rovers, mission scientists
                     have reconstructed an ancient past when Mars was awash in
                     water. Spirit and Opportunity each found evidence for past
                     wet conditions that possibly could have supported microbial
                     life.
                     <button class="bg-transparent hover:bg-teal-300 text-black py-2 px-4 border border-teal-300 hover:border-transparent rounded mt-12">
                        <Link
                           className="block text-teal-300 text-2xl hover:text-black"
                           to="/MarsRoverGallery"
                        >
                           Check Curiosity's Rover pictures from Mars
                        </Link>
                     </button>

                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
