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
      return (
      <div className="mx-auto pt-12 pb-32" >
         <Loader className="mx-auto" />
      </div>
      );
   }

   return (
      <div className="container mx-auto">
         <div className="grid gap-6 grid-cols-3 object-cover">
            {res.response.map((launch, i) => {
               return (
                  <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
                     <img
                        className="w-full py-8 px-8"
                        src={launch.patch}
                        alt="Sunset in the mountains"
                     />
                     <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                           {launch.name}
                        </div>
                        <p className="text-gray-700 text-base"></p>
                     </div>
                     <div className="flex justify-between px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                           Launch {launch.flight_number}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700">
                           {launch.rocket}
                        </span>
                        <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                           {launch.year}
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
