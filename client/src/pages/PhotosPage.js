 import React, { useState, useEffect } from "react";
 import useFetch from "../components/hooks/useFetch";
 // import VideoFeatured from "./VideoFeatured";
 // import Loader from "./Loader";
 // import { SRLWrapper } from "simple-react-lightbox";

 function PhotosPage() {
    const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
    console.log(res);
    if (!res.response) {
       return <div>Loading...</div>;
    }
    const dogName = res.response.status;
    const imageUrl = res.response.message;
    return (
       <div>
          <div>
             <h3>{dogName}</h3>
             <div>
                <img src={imageUrl} alt="avatar" />
             </div>
          </div>
       </div>
    );
 }

 export default PhotosPage;