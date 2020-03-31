 import React, { useState, useEffect } from "react";
 import useFetch from "../components/hooks/useFetch";
 // import VideoFeatured from "./VideoFeatured";
 import Loader from "../components/Loader";
 import { SRLWrapper } from "simple-react-lightbox";

 function PhotosPage() {
   const [photos, setPhotos] = useState({});

   const res = useFetch("/api/photoCollection/photos", {});

   if (!res.response) {
      return <Loader/>;
   }

   return (
      <div className="container mx-auto">
         {/* <SRLWrapper> */}
            <div className="grid gap-6 grid-cols-4">
               {res.response.map(photo => {
                  return (

                     <img
                        className="w-full rounded-sm cursor-pointer"
                        src={photo.href}
                        key={photo.id}
                        alt={photo.title}
                     />
                  );
               })}
            </div>
         {/* </SRLWrapper> */}
      </div>
   );
 }

export default PhotosPage;