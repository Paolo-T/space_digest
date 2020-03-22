import React from "react";
import Header from "../components/Header";
import Footer from "../components/base/Footer";
import Asteroids from "../components/Asteroids";
import Media from "../components/Media";
import MarsWeather from "../components/MarsWeather";
import RoverPhotos from "../components/RoverPhotos";
import SimpleReactLightbox from "simple-react-lightbox";

function Home() {
   return (
      <div>
         <div className="">
            <Header />
            {/* <Asteroids /> */}

            {/* <SimpleReactLightbox>
               <Media />
            </SimpleReactLightbox> */}

            <MarsWeather />

            {/* <SimpleReactLightbox>
               <RoverPhotos />
            </SimpleReactLightbox> */}

            <Footer />
         </div>
      </div>
   );
}

export default Home;
