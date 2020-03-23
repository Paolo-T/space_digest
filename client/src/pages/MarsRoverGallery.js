import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import RoverPhotos from "../components/RoverPhotos";

function MarsRoverGallery() {
   return (
      <div className="pt-32">
         <div>
            {/* <div
               class="bg-fixed"
               style="background-image: url(../img/curiosity-rover.jpg)"
            ></div> */}
         </div>
         <SimpleReactLightbox>
            <RoverPhotos />
         </SimpleReactLightbox>
      </div>
   );
}

export default MarsRoverGallery;
