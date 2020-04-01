import React, { useState, useEffect } from "react";
import useFetch from "../components/hooks/useFetch";
// import VideoFeatured from "./VideoFeatured";
import Loader from "../components/Loader";
import { SRLWrapper } from "simple-react-lightbox";

function PhotosPage() {
   // const [photos, setPhotos] = useState({});

   const res = useFetch("/api/photoCollection/photos", {});

   if (!res.response) {
      return <Loader />;
   }

   return (
      <div className="container mx-auto">
         <SRLWrapper>
            <div className="grid gap-6 grid-cols-4 object-cover">
               {res.response.map((photo, i) => {
                  return (
                     <img
                        className="object-cover object-center h-64 w-full rounded-sm"
                        // style={{
                        //    backgroundImage: `url(${photo.href})`
                        // }}
                        src={photo.href}
                        key={i}
                        alt={photo.title}
                     />
                  );
               })}
            </div>
         </SRLWrapper>
      </div>
   );
}

// backgroundImage: `url(${Background})`;
export default PhotosPage;
