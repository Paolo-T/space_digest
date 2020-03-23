import React from "react";
import Asteroids from "./Asteroids";
import Media from "./Media";
import MarsWeather from "./MarsWeather";
import RoverPhotos from "./RoverPhotos";
import SimpleReactLightbox from "simple-react-lightbox";

function MainContent() {
   return (
      <div>
         <Asteroids />

         <SimpleReactLightbox>
            <Media />
         </SimpleReactLightbox>

         <MarsWeather />

         <SimpleReactLightbox>
            <RoverPhotos />
         </SimpleReactLightbox>
      </div>
   );
}

export default MainContent;
