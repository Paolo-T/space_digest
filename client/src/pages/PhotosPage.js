import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import PhotoCollection from "../components/PhotoCollection";
import moonlanding from "../img/moonlanding.jpg";

function MarsRoverGallery() {
   return (
      <div className="container mx-auto pt-12">
         <div className="mb-12">
            <div className="w-9/12 mx-auto max-auto">
               <h1 className="">Photo Collection</h1>
               {/* <p className="p w-3/4 block">
                  Spirit and Opportunity landed on Mars January 3 and January
                  24, 2004 PST (Jan. 4 and Jan. 25 UTC). Both rovers lived well
                  beyond their planned 90-day missions. Opportunity worked
                  nearly 15 years on Mars and broke the driving record for
                  putting the most miles on the odometer. The twin geologists,
                  Spirit and Opportunity, have both found dramatic evidence
                  that:
               </p> */}
            </div>

            <img
               className="container mx-auto mb-16"
               src={moonlanding}
               alt="Moon Landing"
            />
         </div>


         <div className="flex mb-10 text-left">
            <div className="w-9/12 mx-auto">
               <SimpleReactLightbox>
                  <PhotoCollection />
               </SimpleReactLightbox>
            </div>
         </div>

      </div>
   );
}

export default MarsRoverGallery;
