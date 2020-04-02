import React, { useState, useEffect } from "react";
import useFetch from "../components/hooks/useFetch";
// import VideoFeatured from "./VideoFeatured";
import Loader from "../components/Loader";
import { SRLWrapper } from "simple-react-lightbox";

function PhotosPage() {
   // const [photos, setPhotos] = useState({});

   const res = useFetch("/api/spacex/:launch", {});

   console.log("Launches fetched! --->>>", res);

   if (!res.response) {
      return <Loader />;
   }

   return (
      <div className="container mx-auto">
         <div className="grid gap-6 grid-cols-3 object-cover">
            {res.response.map((launch, i) => {
               return (
                  <div class="max-w-sm rounded overflow-hidden shadow-lg">
                     <img
                        class="w-full py-8 px-8"
                        src={launch.links.mission_patch}
                        alt="Sunset in the mountains"
                     />
                     <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                           The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                           Lorem ipsum dolor sit amet, consectetur adipisicing
                           elit. Voluptatibus quia, nulla! Maiores et
                           perferendis eaque, exercitationem praesentium nihil.
                        </p>
                     </div>
                     <div class="px-6 py-4">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                           #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                           #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                           #winter
                        </span>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

// backgroundImage: `url(${Background})`;
export default PhotosPage;
