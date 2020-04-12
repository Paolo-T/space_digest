import React, { useState, useEffect } from "react";
import useFetch from "../components/hooks/useFetch";
// import VideoFeatured from "./VideoFeatured";
import Loader from "./base/Loader";
import { SRLWrapper } from "simple-react-lightbox";

function PhotosPage() {
    // const [photos, setPhotos] = useState({});

    const res = useFetch("/api/photo-collection/photos", {});

    if (!res.response) {
        return <Loader />;
    }

    return (
        <SRLWrapper>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4 object-cover">
                {res.response.map((photo, i) => {
                    return (
                        <img
                            className="object-cover object-center h-74 w-full rounded-sm col-span-1"
                            src={photo.href}
                            key={i}
                            alt={photo.title}
                        />
                    );
                })}
            </div>
        </SRLWrapper>
    );
}

// backgroundImage: `url(${Background})`;
export default PhotosPage;
